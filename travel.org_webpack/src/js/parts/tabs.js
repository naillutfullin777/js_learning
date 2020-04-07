function tabs() {
    class SwitchTabs {
        constructor(a) {
            this.a = a;
        }
        hide(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        show(a) {
            if (tabContent[a].classList.contains('hide')) {
                tabContent[a].classList.remove('hide');
                tabContent[a].classList.add('show');
            }
        }
    };
    
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header'),
        tabs = new SwitchTabs;
    
    tabs.hide(1); 
    
    info.addEventListener('click', (event) => { 
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                        tabs.hide(0); 
                        tabs.show(i); 
                    break;
                }
            }
        }
    });
}

module.exports = tabs;
