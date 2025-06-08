# Swap
## Create swap
### Create swap file
Assume need 8GB swap
```bash
sudo fallocate -l 8G /swapfile
```
### Set permission
```bash
sudo chmod 600 /swapfile
```
### Format as swap
```bash
sudo mkswap /swapfile
```
### Enable swap
```bash
sudo swapon /swapfile
```
### Check the swap
```bash
sudo swapon --show
free -h
```
### Add to fstab
Edit /etc/fstab
```bash
sudo nano /etc/fstab
```
Add this line
```md
/swapfile none swap sw 0 0
```

## Remove swap
### Disable swap
```bash
sudo swapoff /swapfile
```
### Delete swap file
```bash
sudo rm /swapfile
```
Remove from fstab