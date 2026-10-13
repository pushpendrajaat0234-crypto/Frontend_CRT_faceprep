const getBtn = document.getElementById("getBtn");
const output = document.getElementById("output");

getBtn.addEventListener("click", async function(){
    output.textContent = "Loading users...";

    try{
        const response = await fetch(
            
        );
        if(!response.ok){
            throw new Error("HTP Error:" + response.status);
        }

        const user = await response.json();

        output.textContent = JSON.stringify(useSyncExternalStore, null, 2);
    }catch(error){
        output.textContent = "GET Error:" + error.message;
    }
});