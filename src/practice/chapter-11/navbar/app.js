const mobileMenu = document.querySelector('.mobileMenu')
const toggleBtn = document.querySelector('button')

toggleBtn.onclick = function() {
    if (mobileMenu.classList.contains('hidden')) {
        toggleBtn.innerHTML = `
        <span>منو</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        `
    } else {
        toggleBtn.innerHTML = `
            <span>منو</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>`
    }
    mobileMenu.classList.toggle('hidden')
}

