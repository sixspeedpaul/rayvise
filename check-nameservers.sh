#!/bin/bash
# Quick nameserver check for rayvise.ca

echo "🔍 Checking nameservers for rayvise.ca..."
echo ""

CURRENT=$(dig NS rayvise.ca +short | sort)

echo "Current nameservers:"
echo "$CURRENT"
echo ""

if echo "$CURRENT" | grep -q "wixdns"; then
    echo "❌ Status: Still on Wix DNS"
    echo "   (not changed yet)"
elif echo "$CURRENT" | grep -q "netfirms"; then
    echo "✅ Status: Successfully switched to Netfirms!"
    echo "   (propagation in progress)"
else
    echo "⚠️  Status: Unknown nameservers"
    echo "   (check manually)"
fi

echo ""
echo "Check global propagation: https://dnschecker.org/?ns=rayvise.ca&type=NS"
