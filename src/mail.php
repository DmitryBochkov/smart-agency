<?php
//Принимаем постовые данные
$form=$_POST['main-form'];
$name=$_POST['username'];
$email=$_POST['email'];
$user_message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "dmitry.bochkov@gmail.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Форма: ".htmlspecialchars($form)."<br>
Имя пользователя: ".htmlspecialchars($name)."<br>
Email: ".htmlspecialchars($email)."<br>
Сообщение:" .htmlspecialchars($user_message);
// Отправляем письмо при помощи функции mail();
$headers = "From: stastroi.ru <mail@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>
