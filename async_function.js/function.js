async function fectchasync () {
    let resp = await fetch("https://server-demo-wwq4.onrender.com");
    let data = await resp.json();
    console.log(data)
}

fectchasync()