import smtplib
from email.message import EmailMessage

def email_message(subject, content, toRecipient):
    msg = EmailMessage()
    msg.set_content(content)
    msg['subject'] = subject
    msg['toRecipient'] = toRecipient

    user = "naryasomayaj@umass.edu"
    msg['from'] = user
    password = "cfuwovncdtqinrtp"

    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login(user,password)
    server.send_message(msg)
    
    
    server.quit()

if __name__ == "__main__":
    email_message("Hello","Emergency","nityaka01@gmail.com")