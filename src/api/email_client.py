import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(smtp_server, port, username, password, to_email, subject, body, html=False):
    """Send an email using SMTP"""

    # Create message
    msg = MIMEMultipart('alternative') if html else MIMEText(body, 'plain')

    msg['Subject'] = subject
    msg['From'] = username
    msg['To'] = to_email

    if html:

        # Add plain text and HTML parts
        text_part = MIMEText(body, 'plain')
        html_part = MIMEText(body, 'html')
        msg.attach(text_part)
        msg.attach(html_part)

    # Send email
    with smtplib.SMTP(smtp_server, port) as server:
        server.starttls()
        server.login(username, password)
        server.send_message(msg)


def send_email_multiple_recipes(smtp_server, port, username, password, to_emails, subject, body, html=False, cc=None, bcc=None):
    """Send an email using SMTP to multiple recipients"""

    # Convert single email to list
    if isinstance(to_emails, str):
        to_emails = [to_emails]

    # Create message
    msg = MIMEMultipart('alternative') if html else MIMEText(body, 'plain')

    if html:
        msg['Subject'] = subject
        msg['From'] = username
        msg['To'] = ', '.join(to_emails)  # Multiple recipients in header

        # Add CC and BCC if provided
        if cc:
            cc = [cc] if isinstance(cc, str) else cc
            msg['Cc'] = ', '.join(cc)
        if bcc:
            bcc = [bcc] if isinstance(bcc, str) else bcc
            # BCC is not added to headers (that's the point!)

        # Add plain text and HTML parts
        text_part = MIMEText(body, 'plain')
        html_part = MIMEText(body, 'html')
        msg.attach(text_part)
        msg.attach(html_part)
    else:
        msg['Subject'] = subject
        msg['From'] = username
        msg['To'] = ', '.join(to_emails)

        if cc:
            cc = [cc] if isinstance(cc, str) else cc
            msg['Cc'] = ', '.join(cc)
        if bcc:
            bcc = [bcc] if isinstance(bcc, str) else bcc

    # Combine all recipients for actual sending
    all_recipients = to_emails[:]
    if cc:
        all_recipients.extend(cc)
    if bcc:
        all_recipients.extend(bcc)

    # Send email
    with smtplib.SMTP(smtp_server, port) as server:
        server.starttls()
        server.login(username, password)
        server.sendmail(username, all_recipients, msg.as_string())


recipient_emails = ['combm@gmail.com']

if __name__ == "__main__":

    # HTML email example
    html_body = """
    <h2>Hello there! 🌈</h2>
    <p>This is a <strong>cute HTML email</strong> sent with Python!</p>
    <p>Hope you have a <em>fantastic</em> day! ✨</p>
    """

    send_email_multiple_recipes(
        smtp_server="smtp.gmail.com",
        port=587,
        username="combm77@gmail.com",
        password="dfxauqbdatcdcnfo",  # Use app password for Gmail
        to_emails=recipient_emails,
        subject="Hello for Medagend! 🌟",
        body=html_body,
        html=True,
        bcc=recipient_emails
    )