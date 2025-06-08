# Install XRDP and XFCE to Debian Based

## Add user

```bash
sudo adduser <username>
```
```bash
sudo su - <username>
```
```bash
echo xfce4-session > ~/.xsession
```

## Install package
```bash
sudo apt update && sudo apt install xfce4 xfce4-goodies xrdp openssl
```

## Limit root access

Edit xrdp-sesman configuration file
```bash
sudo nano /etc/pam.d/xrdp-sesman
```

Add this line
```bash
auth required pam_succeed_if.so user != root
```
Restart XRDP
```bash
sudo systemctl restart xrdp
```

## Allow firewall
```bash
sudo ufw allow 3389
```

## Set TLS (optional)

Request ssl certificate
```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/xrdp/ssl/xrdp.key -out /etc/xrdp/ssl/xrdp.crt -subj "/CN=<yourIp>"
```

Edit xrdp configuration file
```bash
sudo nano /etc/xrdp/xrdp.ini
```

Find Globals configuration, uncomment the line, and add path to ssl .crt and .key file
```md
[Globals]
security_layer=tls
certificate=/etc/xrdp/ssl/xrdp.crt
key_file=/etc/xrdp/ssl/xrdp.key
```

Add xrdp to ssl-cert group
```bash
sudo adduser xrdp ssl-cert`
```

Set file permission
```bash
sudo chown root:ssl-cert /etc/xrdp/ssl/xrdp.crt /etc/xrdp/ssl/xrdp.key
```
```bash
sudo chmod 640 /etc/xrdp/ssl/xrdp.crt /etc/xrdp/ssl/xrdp.key
```

Restart xrdp
```bash
sudo systemctl restart xrdp
```