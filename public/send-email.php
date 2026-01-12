<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $nome = isset($data['nome']) ? strip_tags(trim($data['nome'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $telefone = isset($data['telefone']) ? strip_tags(trim($data['telefone'])) : '';
    $site = isset($data['site']) ? strip_tags(trim($data['site'])) : '';
    $mensagem = isset($data['mensagem']) ? strip_tags(trim($data['mensagem'])) : '';
    $pagina = isset($data['pagina']) ? strip_tags(trim($data['pagina'])) : 'Contato';
    
    if (empty($nome) || empty($email)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Nome e email são obrigatórios']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email inválido']);
        exit;
    }
    
    $to = 'comercial@loopscale.com.br';
    $subject = "Novo contato do site - $pagina";
    
    $body = "Novo contato recebido do site Loop Scale\n\n";
    $body .= "Página: $pagina\n\n";
    $body .= "Nome: $nome\n";
    $body .= "Email: $email\n";
    
    if (!empty($telefone)) {
        $body .= "Telefone: $telefone\n";
    }
    
    if (!empty($site)) {
        $body .= "Site: $site\n";
    }
    
    if (!empty($mensagem)) {
        $body .= "\nMensagem:\n$mensagem\n";
    }
    
    $headers = "From: noreply@loopscale.com.br\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email enviado com sucesso']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Erro ao enviar email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}
?>
