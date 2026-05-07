function load(){
  let grid = document.getElementById("cosmeticsGrid");
  grid.innerHTML = "";

  getCosmetics().forEach((c, i) => {
    let div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <div>
        <img src="${c.icon}">
        <div>${c.name}</div>
        <div style="color:#aaa">${c.type}</div>
        <div style="color:#ccc;font-size:12px;margin-top:4px;">
          ${c.desc ? c.desc : ""}
        </div>
      </div>

      <div>
        <div onclick="alert('${c.id}\\nCost: ${c.cost}\\n${c.desc || ""}')"
             style="color:#00ff99;cursor:pointer">
          ${c.id}
        </div>

        <button class="admin-btn" onclick="editCosmetic(${i})">!</button>
        <button class="del-btn" onclick="deleteCosmetic(${i})">X</button>
      </div>
    `;

    grid.appendChild(div);
  });
}
