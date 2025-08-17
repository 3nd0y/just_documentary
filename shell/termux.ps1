$mac = "5e-f5-9b-8c-98-b5"  # Ganti dengan MAC smartphone
$arp = arp -a | Select-String $mac
if ($arp) {
    $ip = ($arp -split '\s+')[1]
    ssh -p 8022 u0_aXXX@$ip
} else {
    Write-Host "Smartphone tidak terdeteksi di jaringan."
}