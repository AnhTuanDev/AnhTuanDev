const header = document.querySelector('.header');

/*-------------- Function ----------------*/

let RenderHeader = () => {
    return header.innerHTML = `
        <div class="header-content">
            <!-- left header -->
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="avatar-container flex-col items-center">
                    <img src="src/images/avatar.jpg" alt="Anh Tuan Dev" class="avartar">
                    <a href="www.github.com/AnhTuanDev/anhtuandev.github.io"> Anh Tuan Dev </a>
                </div>
            </div>
            <!-- right header -->
            <div class="right-header">

                <h1 class="header-author">
                    <p class="header-author-label">Xin chào,</p>
                    Tôi là 
                    <span class="header-author-name">Anh Tuấn</span>
                    một Developer.
                </h1>
                <p class="header-author-description">
                    Tôi là một develper, tôi thích viết css và html.
                    Tôi xem đó là một sở thích hàng đầu.
                    Php cũng là một ngôn ngữ lập trình mà tôi yêu thích
                    cùng với gdscript.
                    Dolor eos atque vel assumenda iure! 
                    Quisquam molestias veritatis 
                </p>
                <!-- button -->
                <a class="right-header-btn" href="#">
                    <div class="btn-hover-left-slide-outline">
                        <span class="btn-label mr-3px"> Download cv </span>
                        <span class="btn-icon material-icons-outlined">download</span>
                    </div>
                </a>
            </div>
            <!-- end right header -->
        </div>
    `;
}

export default RenderHeader();


