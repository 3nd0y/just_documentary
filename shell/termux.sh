#!/bin/bash
TARGET_MAC="XX:XX:XX:XX:XX:XX"  # MAC address smartphone
IP=$(arp -a | grep "$TARGET_MAC" | awk '{print $2}' | tr -d '()')
ssh -p 8022 u0_aXXX@$IP