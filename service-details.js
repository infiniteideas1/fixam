const serviceData = {
    "facebook": {
        title: "Facebook Recovery",
        icon: "image/services logos/facebook.png",
        description: "Regain access to hacked or disabled personal profiles and business pages. We navigate confusing support loops to restore your administrative rights and secure your social identity.",
        details: [
            "Recovery of hacked personal profiles",
            "Restoration of disabled Business Managers",
            "Removal of unauthorized admin access",
            "Identity verification assistance"
        ]
    },
    "instagram": {
        title: "Instagram Recovery",
        icon: "image/services logos/instagram.png",
        description: "Restore compromised accounts, recover lost followers, and secure your brand presence against future impersonation attacks. We specialize in high-value influencer and business accounts.",
        details: [
            "Hacked account retrieval",
            "Banned/Disabled account appeals",
            "2FA bypass for compromised numbers",
            "Copyright violation dispute resolution"
        ]
    },
    "email": {
        title: "Email Recovery",
        icon: "image/services logos/mail.png",
        description: "Secure recovery for Gmail, Outlook, Yahoo, and corporate webmail. We stop unauthorized forwarding, remove hidden filters, and secure your primary communication channels.",
        details: [
            "Compromised password reset",
            "Recovery of deleted emails",
            "Unlinking unauthorized devices",
            "Corporate exchange server forensics"
        ]
    },
    "crypto": {
        title: "Crypto Recovery",
        icon: "image/services logos/crypto.png",
        description: "Specialized forensic tracing for stolen assets. We use advanced blockchain analytics to track funds and liaise with exchanges and law enforcement for potential freezing and recovery.",
        details: [
            "Wallet drainer investigation",
            "Exchange hack assistance",
            "Smart contract interaction analysis",
            "Lost private key consultation (brute force)"
        ]
    },
    "whatsapp": {
        title: "WhatsApp Recovery",
        icon: "image/services logos/whatsapp.png",
        description: "Unban numbers and recover hijacked accounts. We assist in restoring chat history backups and securing Two-Step Verification to prevent re-hijacking of your personal or business number.",
        details: [
            "Banned number restoration",
            "Stolen account recovery",
            "Chat backup decryption",
            "Business API access restoration"
        ]
    },
    "reddit": {
        title: "Reddit Recovery",
        icon: "image/services logos/reddit.png",
        description: "Recover high-karma accounts and moderator privileges. We assist with resolving shadowbans, appealing suspensions, and securing credentials against credential stuffing attacks.",
        details: [
            "Hacked account retrieval",
            "Subreddit ownership restoration",
            "Shadowban appeal guidance",
            "Secure 2FA implementation"
        ]
    },
    "discord": {
        title: "Discord Recovery",
        icon: "image/services logos/discord.png",
        description: "Restore access to server ownership and developer accounts. We help reverse token logging damage, remove malicious webhooks, and secure your community from raids.",
        details: [
            "Token grabber remediation",
            "Server ownership transfer reversal",
            "Banned account appeals",
            "Malicious bot removal"
        ]
    },
    "files": {
        title: "Files & Media Recovery",
        icon: "image/services logos/file and media.png",
        description: "Decrypt ransomwared files and recover deleted data from cloud drives and physical storage. We specialize in digital forensics for valuable intellectual property and sentimental media.",
        details: [
            "Ransomware decryption assistance",
            "Cloud drive data restoration",
            "Corrupted file repair",
            "Secure data extraction"
        ]
    },
    "telegram": {
        title: "Telegram Recovery",
        icon: "image/services logos/telegram.png",
        description: "Recover channels and groups lost to scammers. We help remove unauthorized bots, restore administrative control, and secure high-value usernames.",
        details: [
            "Channel ownership recovery",
            "Deleted account restoration",
            "Scam bot removal",
            "Group admin rights reset"
        ]
    },
    "youtube": {
        title: "YouTube Recovery",
        icon: "image/services logos/youtube.png",
        description: "Reclaim monetized channels and stop live-stream hacks. We work to restore deleted videos, secure your Adsense connection, and remove unauthorized brand deals.",
        details: [
            "Hijacked channel recovery",
            "Copyright strike mediation",
            "AdSense account relinking",
            "Live stream ban appeals"
        ]
    },
    "twitter": {
        title: "X (Twitter) Recovery",
        icon: "image/services logos/x.png",
        description: "Restore access to suspended or hacked handles. We help protect your verified status, clean up unauthorized tweets, and secure your account against social engineering attempts.",
        details: [
            "Suspended account appeals",
            "Hacked handle retrieval",
            "Verified status protection",
            "Malicious app revocation"
        ]
    },
    "microsoft": {
        title: "Microsoft Recovery",
        icon: "image/services logos/microsoft.png",
        description: "Unlock frozen Outlook and Azure accounts. We assist with BitLocker lockout issues, enterprise identity management, and recovering access to critical 365 documents.",
        details: [
            "Azure AD account recovery",
            "BitLocker key retrieval info",
            "Outlook/Hotmail unbanning",
            "365 Admin access restoration"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const rawId = params.get('id');
    const serviceId = rawId ? rawId.toLowerCase().trim() : null;

    const contentDiv = document.getElementById('service-detail-content');
    const heroTitle = document.getElementById('service-hero-title');

    if (serviceId && serviceData[serviceId]) {
        const service = serviceData[serviceId];

        // Update Title
        document.title = `${service.title} - Fixapathway`;

        // Build Details List HTML
        const detailsList = service.details.map(item => `
            <li style="color: var(--midnight-blue); font-weight: 500; margin-bottom: 0.8rem; display: flex; align-items: center;">
                <i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 12px; font-size: 1.1rem;"></i>
                ${item}
            </li>`).join('');

        // Inject Content
        if (contentDiv) {
            // Encode the entire path once
            const finalIconPath = encodeURI(service.icon);

            contentDiv.innerHTML = `
                <div class="grid" style="margin-top: 0 !important;">
                    <div style="text-align: center; margin-bottom: 0.5rem;">
                        <h2 style="color: var(--midnight-blue); border: none; padding: 0; margin-bottom: 0.5rem; font-weight: 800;">${service.title}</h2>
                        <img src="${finalIconPath}" alt="${service.title}" style="width: 100%; height: auto; max-height: 800px; object-fit: contain; margin-bottom: 0.5rem;">
                        <p style="font-size: 1.25rem; max-width: 900px; margin: 0 auto; color: var(--midnight-blue); line-height: 1.6;">${service.description}</p>
                    </div>
                </div>
                <div class="grid" style="margin-top: 1rem;">
                    <article>
                        <h4 style="margin-bottom: 1.5rem; color: var(--primary-blue);">Key Features</h4>
                        <ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
                            ${detailsList}
                        </ul>
                    </article>
                    <article style="background: var(--primary-blue) !important; color: white !important; display: flex; flex-direction: column; justify-content: center; text-align: center;">
                        <h3 style="color: white; border-left: none;">Need Urgent Help?</h3>
                        <p style="color: rgba(255,255,255,0.9);">Our experts are ready to start your ${service.title} case immediately.</p>
                        <a href="contact" role="button" style="background: white; color: var(--primary-blue); border: none; font-weight: bold; margin-top: 1rem;">Contact Us Now</a>
                    </article>
                </div>
            `;
        }
    } else {
        // Fallback if ID not found
        if (contentDiv) {
            contentDiv.innerHTML = `
                < div style = "text-align: center; padding: 4rem;" >
                    <h2>Service Not Found</h2>
                    <p>Please return to our <a href="services">services page</a>.</p>
                </div >
                `;
        }
    }
});
