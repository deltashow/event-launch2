document.getElementById("openClientModal").addEventListener("click", () => {
    const name = prompt("أدخل اسم العميل:");
    const phone = prompt("أدخل رقم هاتف العميل:");
    if(name && phone) {
        const tbody = document.getElementById("clientList");
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${name}</td>
            <td>${phone.substring(0, 4)}****${phone.substring(8)}</td>
            <td>مشروع عام</td>
            <td>اليوم</td>
            <td><span class="status-active">محمي (باقي 30 يوم)</span></td>
        `;
        tbody.appendChild(tr);
    }
});