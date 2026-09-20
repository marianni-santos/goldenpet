const navbar = document.querySelector("#navbar");
const isInsidePages = window.location.pathname.includes("/pages/");
const basePath = isInsidePages ? "../" : "";

navbar.innerHTML = `
    <header class="bg-[#FAF3D4]">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="${basePath}index.html" class="flex items-center gap-3">
                <img
                    src="${basePath}assets/logo1.png"
                    alt="Logo GoldenPet"
                    class="h-12 w-12 object-contain"
                >

                <span class="text-2xl font-bold text-[#BF4100]">
                    GoldenPet
                </span>
            </a>

            <div class="flex items-center gap-6">
                <a href="${basePath}index.html"
                   class="text-[#666666] transition hover:text-[#9D3500]">
                    Início
                </a>

                <a href="${basePath}pages/animais.html"
                   class="text-[#666666] transition hover:text-[#9D3500]">
                    Meus animais
                </a>

                <a href="${basePath}pages/consultas.html"
                   class="text-[#666666] transition hover:text-[#9D3500]">
                    Agendamentos
                </a>

                <a href="${basePath}pages/historico.html"
                   class="text-[#666666] transition hover:text-[#9D3500]">
                    Histórico
                </a>
            </div>
        </nav>
    </header>
`;