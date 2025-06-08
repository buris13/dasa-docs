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

## Limit user.slice cpu usage
Assume, the machine have 8 cpu, limit to 600%
```bash
sudo systemctl edit user.slice
```
Add this line
```bash
[Slice]
CPUQuota=600%
```
Reload daemon
```bash
sudo systemctl daemon-reload
```
Move docker from system.slice to user.slice
```bash
sudo nano /etc/docker/daemon.json
```
Add this line
```json
{
  "cgroup-parent": "user.slice"
}
```
Restart docker
```bash
sudo systemctl restart docker
```