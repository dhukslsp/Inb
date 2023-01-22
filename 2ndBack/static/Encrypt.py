from cryptography.fernet import Fernet

def granerate_key():
    key = Fernet.generate_key()
    with open("secret.key","wb") as keyfile:
        keyfile.write(key)
def load_key():
    """
    Loads the key named `secret.key` from the current directory.
    """
    return open("secret.key", "rb").read()

def decrypt_message(encrypted_message):
    """
    Decrypts an encrypted message
    """
    key = load_key()
    f = Fernet(key)
    decrypted_message = f.decrypt(encrypted_message)

    return decrypted_message.decode()

def Encrypting_Meage(message):
    key = load_key()
    encoded_Message = message.encode()
    f = Fernet(key)
    encrypted_Message = f.encrypt(encoded_Message)
    return encrypted_Message