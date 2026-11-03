const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', '[lang]', 'skills.astro');
let content = fs.readFileSync(filePath, 'utf8');

const isCRLF = content.includes('\r\n');
let norm = content.replace(/\r\n/g, '\n');

const currentBlock = `                <div>
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700"
                      >{isFr ? "Français" : "French"}</span
                    >
                    <span class="text-sm text-gray-500"
                      >{isFr ? "Intermédiaire" : "Intermediate"}</span
                    >
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-yellow-500 h-2 rounded-full"
                      style="width: 70%"
                    >
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700"
                      >{isFr ? "Anglais" : "English"}</span
                    >
                    <span class="text-sm text-gray-500"
                      >{isFr ? "Courant" : "Fluent"}</span
                    >
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-blue-500 h-2 rounded-full"
                      style="width: 90%"
                    >
                    </div>
                  </div>
                </div>`;

const swappedBlock = `                <div>
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700"
                      >{isFr ? "Anglais" : "English"}</span
                    >
                    <span class="text-sm text-gray-500"
                      >{isFr ? "Courant" : "Fluent"}</span
                    >
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-blue-500 h-2 rounded-full"
                      style="width: 90%"
                    >
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="font-medium text-gray-700"
                      >{isFr ? "Français" : "French"}</span
                    >
                    <span class="text-sm text-gray-500"
                      >{isFr ? "Intermédiaire" : "Intermediate"}</span
                    >
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-yellow-500 h-2 rounded-full"
                      style="width: 70%"
                    >
                    </div>
                  </div>
                </div>`;

if (!norm.includes(currentBlock)) {
  console.error("Could not find currentBlock");
  process.exit(1);
}

norm = norm.replace(currentBlock, swappedBlock);

const finalContent = isCRLF ? norm.replace(/\n/g, '\r\n') : norm;
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('Successfully swapped: English is now above French!');

