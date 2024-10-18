let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   
   // Membuat elemen baru untuk tugas
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-white p-4 rounded-md shadow-md`;
   
   task.innerHTML = `
      <p class="flex-1">${title}</p>
      <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
             class="bg-green-200 text-black px-3 py-1 rounded hover:bg-green-400 cursor-pointer">
      <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
             class="bg-red-200 text-black px-3 py-1 rounded hover:bg-red-400 cursor-pointer">
   `;
   
   output.appendChild(task);
   input.value = "";

   // Fungsi tombol SELESAI
   task.querySelector('#btn-selesai').onclick = function() {
      let taskText = task.querySelector('p');
      taskText.style.textDecoration = 'line-through';
      this.disabled = true;
      this.className = 'bg-gray-300 text-black px-3 py-1 rounded cursor-not-allowed';
   };

   // Fungsi tombol HAPUS
   task.querySelector('#btn-hapus').onclick = function() {
      task.remove();
   };

   e.preventDefault();
};
