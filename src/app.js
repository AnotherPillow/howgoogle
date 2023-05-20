const params = new URLSearchParams(window.location.search);
const query = params.get("q")

if (query) {
    document.addEventListener('DOMContentLoaded', (_) => {
        const input = document.querySelector('.searchinput')
        let i = 0;
        let interval = setInterval(()=>{
            if (i >= query.length) {
              const encoded = encodeURIComponent(query)
              window.location.href = `https://www.google.com/search?q=${encoded}` 
              return clearInterval(interval)
            }
            let c = query[i]
            input.value+=c;
            
            i++;
        }, 1000)
    })
} else {
    document.addEventListener('DOMContentLoaded', (_) => {
        const input = document.querySelector('.searchinput')
        input.placeholder = "Enter something..."
        input.addEventListener("keydown", (ev) => {
            if (ev.keyCode === 13) window.location.href += `?q=${input.value}`
        })
        
    })
}