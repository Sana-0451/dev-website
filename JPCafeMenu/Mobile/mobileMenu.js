/**
 * JPCafe Mobile Menu Structure
 * 集中管理所有移动版菜单配置
 */

const menuStructure = {
    "1.账户管理": {
        "1.个人账户": "1.账户管理/1.个人账户/个人账户.html",
        "2.账户钱包": "1.账户管理/2.账户钱包/账户钱包.html",
        "3.用户标签": "1.账户管理/3.用户标签/用户标签.html"
    }
};

/**
 * 生成移动版菜单
 * @param {string} currentPage - 当前页面的菜单项名称，用于高亮显示
 * @returns {void}
 */
function generateMobileMenu(currentPage = '') {
    const menuList = document.getElementById('menuList');
    if (!menuList) {
        console.error('Menu list container not found');
        return;
    }

    Object.keys(menuStructure).forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.className = 'menu-category';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'menu-category-title';
        categoryTitle.innerHTML = `
            <span>${category}</span>
            <div class="menu-arrow"></div>
        `;

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'menu-items';

        Object.keys(menuStructure[category]).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            itemDiv.textContent = item;
            itemDiv.dataset.path = menuStructure[category][item];

            // Check if this is the current page
            if (item === currentPage) {
                itemDiv.classList.add('active');
                categoryLi.classList.add('open');
            }

            itemDiv.addEventListener('click', function() {
                // Load page in iframe
                const pagePath = this.dataset.path;
                console.log('Navigate to:', pagePath);
                
                if (typeof loadPage === 'function') {
                    loadPage(pagePath);
                } else {
                    // Fallback for pages without iframe support
                    alert('导航到: ' + item);
                }
                
                if (typeof closeMenu === 'function') {
                    closeMenu();
                }
            });

            itemsContainer.appendChild(itemDiv);
        });

        categoryTitle.addEventListener('click', function() {
            categoryLi.classList.toggle('open');
        });

        categoryLi.appendChild(categoryTitle);
        categoryLi.appendChild(itemsContainer);
        menuList.appendChild(categoryLi);
    });
}
