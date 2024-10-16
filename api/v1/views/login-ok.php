<div id="navbar-auth">
   <?php include_once VIEWS.'auth-ok-navbar.php'; ?>
</div>

<div id="navbar-auth-mobile">
    <?php include_once VIEWS.'mobile-state-auth.php'; ?>
</div>

<div id="main-content">
<h2 class="font-serif text-[36px] font-bold leading-[0.9] text-spc-sea">
    Done!
</h2>

<p>Now that you are authorized, why not comment on our latest posts?</p>

<div class="mt-8 space-y-4">
    <div
        class="bg-gradient-to-br from-spc-sea to-spc-gold p-[3px] max-w-fit text-spc-light mt-3">
        <a href="/blogs">
            <div
                class="bg-spc-dark p-2 md:px-4 md:py-2 flex justify-between items-center space-x-4 md:hover:text-spc-dark md:hover:bg-gradient-to-br md:hover:from-spc-sea md:hover:to-spc-gold md:hover:duration-700 md:hover:ease-out md:hover:animate-color">
                <span class="font-bold font-sans">Go to Latest Blogs</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>
            </div>
        </a>
    </div>

    <div>
        <a href="/projects">
            <p class="text-sm underline underline-offset-2 font-sans">
  Why not check out some projects to help your Alma Mater?
            </p>
        </a>
    </div>

    <div>
        <a href="/">
            <p class="text-sm underline underline-offset-2 font-sans">
                Go to home instead
            </p>
        </a>
    </div>
</div>
</div>