# Limit

## Limit docker logs
Create /etc/docker/daemon.json
```bash
sudo nano /etc/docker/daemon.json
```
Paste
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```
Restart docker
```bash
sudo systemctl restart docker
```