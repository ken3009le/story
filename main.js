var cors_api_url = "https://cors-anywhere.herokuapp.com/";

async function fetchRandomManga() {
    let apiUrl = cors_api_url + "https://wholesomelist.com/api/random";
    let container = document.getElementById("container");
    
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.result) {
            let entry = data.entry;
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <button class="delete-btn" onclick="this.parentElement.remove()">✖</button>
                <img src="${entry.image || 'https://via.placeholder.com/400x600?text=No+Image'}" alt="Ảnh truyện">
                <h2>${entry.title}</h2>
                <p><strong>Tác giả:</strong> ${entry.author || "Không rõ"}</p>
                <p><strong>Thể loại:</strong> ${entry.tags.join(", ") || "Không có"}</p>
                <p><strong>Số trang:</strong> ${entry.pages}</p>
                <p><strong>🔗 Link:</strong> <a href="${entry.eh || entry.im || entry.nh || '#'}" target="_blank">Đọc Truyện</a></p>
            `;
            container.appendChild(card);
        }
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

function clearAllManga() {
    document.getElementById("container").innerHTML = "";
}
