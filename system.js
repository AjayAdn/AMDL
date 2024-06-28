feather.replace();

document.addEventListener('DOMContentLoaded', () => {
    const bukaMenu = document.querySelector('.navbar');
    const humberger = document.querySelector('#humberger');
    const navbarClose = document.querySelector('#navbar_close');
    const minecraftLogos = document.querySelectorAll('.minecraft-logo');
    const sections = document.querySelectorAll('.minecraft-official, .minecraft-beta, .minecraft-patch');
    const forms = document.querySelectorAll('.minecraft-form');

    // Toggle navbar menu on mobile
    humberger.onclick = () => bukaMenu.classList.toggle('aktif');
    navbarClose.onclick = () => bukaMenu.classList.remove('aktif');

    // Close navbar menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!bukaMenu.contains(e.target)) {
            bukaMenu.classList.remove('aktif');
        }
    });

    // Menampilkan section official di awal
    document.querySelector('.minecraft-official').style.display = 'block';
    // Tambahkan border ke gambar pertama secara default
    minecraftLogos[0].classList.add('selected');

    // Event listener untuk gambar di list-box
    minecraftLogos.forEach((image, index) => {
        image.addEventListener('click', () => {
            // Sembunyikan semua section
            sections.forEach(section => section.style.display = 'none');

            // Tampilkan section sesuai gambar yang diklik
            if (index === 0) {
                document.querySelector('.minecraft-official').style.display = 'block';
            } else if (index === 1) {
                document.querySelector('.minecraft-beta').style.display = 'block';
            } else if (index === 2) {
                document.querySelector('.minecraft-patch').style.display = 'block';
            }

            // Hapus kelas 'selected' dari semua gambar
            minecraftLogos.forEach(img => img.classList.remove('selected'));
            // Tambahkan kelas 'selected' ke gambar yang diklik
            image.classList.add('selected');
        });
    });

    // Event listener untuk gambar di list-box dan menampilkan form yang sesuai
    minecraftLogos.forEach((logo, index) => {
        logo.addEventListener('click', () => {
            forms.forEach(form => form.classList.remove('active'));
            forms[index].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero');
        const tentangSection = document.querySelector('.tentang');
        const listSection = document.querySelector('.list');
        const downloadSection = document.querySelector('.minecraft-form');
        const officialSection = document.querySelector('.minecraft-official');
        const betaSection = document.querySelector('.minecraft-beta');
        const patchSection = document.querySelector('.minecraft-patch');
        const darkSections = [tentangSection, listSection, downloadSection, officialSection, betaSection, patchSection];

        function checkDarkSection() {
            const scrollTop = window.scrollY;
            const navbarHeight = navbar.offsetHeight;

            let isInDarkSection = false;
            darkSections.forEach(section => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionHeight = section.offsetHeight;

                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    isInDarkSection = true;
                }
            });

            if (isInDarkSection) {
                navbar.classList.add('dark');
            } else {
                navbar.classList.remove('dark');
            }
        }

        window.addEventListener('scroll', checkDarkSection);
        checkDarkSection(); // Run on initial load
    });





const officialVersions = [
    {
        version: '1.17.1',
        link: 'https://example.com/minecraft-official-1.17.1'
    },
    {
        version: '1.16.5',
        link: 'https://example.com/minecraft-official-1.16.5'
    }
];

// Data for beta versions
const betaVersions = [
    {
        version: '1.18.0-beta',
        link: 'https://example.com/minecraft-beta-1.18.0'
    }
];

// Data for patch versions - split into 32-bit and 64-bit
// Define versions for patch
const patchVersions = {
    "32-bit": [
        {
            version: '1.21.10',
            link: 'https://example.com/minecraft-patch-1.21.10-32bit'
        },
    ],
    "64-bit": [
        {
            version: '1.21.10',
            link: 'https://example.com/minecraft-patch-1.21.10-64bit'
        },
    ]
};





function createInfoBox(category, versionData) {
    const categoryImages = {
        official: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Gameplay-Trailer_MC-OV-logo_300x300.png",
        beta: "https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/logos/Homepage_Gameplay-Trailer_MC-Dungeons-logo_300x300.png",
        patch: "https://www.minecraft.net/content/dam/minecraftnet/games/badger/logos/Homepage_Gameplay-Trailer_MC-Legends-logo_300x300.png"
    };

    return `
        <div class="info-box">
            <img src="${categoryImages[category]}" alt="Minecraft Icon" class="info-image">
            <div class="info-text">
                <span class="small-text">Minecraft ${category.charAt(0).toUpperCase() + category.slice(1)}</span><br>
                <span class="large-text">${versionData.version}</span>
            </div>
            <a href="${versionData.link}">
                <img src="https://cdn-icons-png.flaticon.com/128/2886/2886052.png" alt="Download Icon" class="download-icon">
            </a>
        </div>
    `;
}


function createPatchInfoBox(category, versionData) {
    const categoryImages = {
        "32-bit": "https://www.minecraft.net/content/dam/minecraftnet/games/badger/logos/Homepage_Gameplay-Trailer_MC-Legends-logo_300x300.png",
        "64-bit": "https://www.minecraft.net/content/dam/minecraftnet/games/badger/logos/Homepage_Gameplay-Trailer_MC-Legends-logo_300x300.png"
    };

    return `
        <div class="info-box">
            <img src="${categoryImages[category]}" alt="Minecraft Icon" class="info-image">
            <div class="info-text">
                <span class="small-text">Minecraft Patch ${category}</span><br>
                <span class="large-text">${versionData.version}</span>
            </div>
            <a href="${versionData.link}">
                <img src="https://cdn-icons-png.flaticon.com/128/2886/2886052.png" alt="Download Icon" class="download-icon">
            </a>
        </div>
    `;
}

function addPatchInfoBoxes(category, versions) {
    const container = document.querySelector(`#patch${category}-container`);
    if (container) {
        versions.forEach(version => {
            container.innerHTML += createPatchInfoBox(category, version);
        });
    } else {
        console.error(`Container #patch${category}-container not found.`);
    }
}

function addInfoBoxes(category, versions) {
    const container = document.querySelector(`#${category}-container`);
    if (container) {
        versions.forEach(version => {
            container.innerHTML += createInfoBox(category, version);
        });
    } else {
        console.error(`Container with ID '${category}-container' not found.`);
    }
}
// Add info boxes for each patch category
addPatchInfoBoxes('32-bit', patchVersions['32-bit']);
addPatchInfoBoxes('64-bit', patchVersions['64-bit']);
addInfoBoxes('official', officialVersions);
addInfoBoxes('beta', betaVersions);
