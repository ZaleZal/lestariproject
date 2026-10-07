let currentCategory = null;

function renderCategories() {
    const categoryGrid = document.getElementById('category-grid');
    categoryGrid.classList.remove('hidden');
    document.getElementById('product-grid').classList.add('hidden');
    document.getElementById('back-button-container').classList.add('hidden');
    document.getElementById('katalog-title').innerText = 'Pilih Kategori Produk';
    document.getElementById('katalog-desc').innerText = 'Klik salah satu kategori di bawah ini untuk melihat detail produk dan variasi pilihannya.';

    categoryGrid.innerHTML = categories.map(category => `
        <div onclick="selectCategory('${category.id}')" class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer">
            <div class="relative h-48 overflow-hidden bg-slate-100">
                <img src="${category.image}" alt="${category.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition"></div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-3 text-center">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center text-xl shadow-md mx-auto -mt-12 relative z-10 mb-3 group-hover:scale-110 transition">
                        <i class="fa-solid ${category.icon}"></i>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition">${category.name}</h3>
                    <p class="text-xs text-slate-500 mt-1">${category.desc}</p>
                </div>
                <div class="pt-2 text-xs font-bold text-amber-600 group-hover:underline">
                    Lihat Detail Produk <i class="fa-solid fa-arrow-right ml-1"></i>
                </div>
            </div>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    currentCategory = categoryId;
    const categoryData = categories.find(category => category.id === categoryId);
    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    document.getElementById('category-grid').classList.add('hidden');
    document.getElementById('product-grid').classList.remove('hidden');
    document.getElementById('back-button-container').classList.remove('hidden');
    document.getElementById('katalog-title').innerText = categoryData.name;
    document.getElementById('katalog-desc').innerText = categoryData.desc;

    document.getElementById('product-grid').innerHTML = filteredProducts.map(product => {
        const featuresHtml = product.features.map(feature => `
            <li class="flex items-start text-xs text-slate-600">
                <i class="fa-solid fa-check text-amber-600 mt-0.5 mr-2 shrink-0"></i>
                <span>${feature}</span>
            </li>
        `).join('');
        const waText = encodeURIComponent(`Halo Lestari Project, saya ingin konsultasi dan pemesanan untuk produk *${product.name}*. Mohon informasi lebih lanjut.`);

        return `
            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
                <div class="relative h-48 overflow-hidden bg-slate-100">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                        <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition">${product.name}</h3>
                        <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">${product.desc}</p>
                    </div>
                    <div class="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/50">
                        <span class="block text-[11px] font-bold text-slate-700 uppercase mb-2">Pilihan & Spesifikasi:</span>
                        <ul class="space-y-1.5">${featuresHtml}</ul>
                    </div>
                    <div>
                        <div class="flex items-baseline justify-between mb-4 pt-2 border-t border-slate-100">
                            <span class="text-xs font-medium text-slate-400">Harga mulai</span>
                            <div class="text-right">
                                <span class="text-lg font-extrabold text-amber-600">Rp ${product.price.toLocaleString('id-ID')}</span>
                                <span class="text-[11px] text-slate-500 block">per ${product.unit}</span>
                            </div>
                        </div>
                        <a href="https://wa.me/6285176776783?text=${waText}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition flex items-center justify-center shadow-md shadow-emerald-600/20">
                            <i class="fa-brands fa-whatsapp mr-2 text-base"></i> Konsultasi dan pemesanan via admin whatsapp
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' });
}

function resetCategory() {
    currentCategory = null;
    renderCategories();
}

renderCategories();
