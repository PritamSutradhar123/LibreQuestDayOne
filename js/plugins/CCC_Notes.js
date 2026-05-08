/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @author Gemini
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- LIBREOFFICE LIBRE CALC ---
            case 1: note = "LIBRE CALC: Use Ctrl+Shift+4 to toggle the Currency format for your data."; break;
            case 2: note = "LIBRE CALC: Trigger the Auto Filter ability by executing the Ctrl+Shift+L command."; break;
            case 3: note = "LIBRE CALC: Use the Tab key to move your cursor between cells on the grid."; break;
            case 4: note = "LIBRE CALC: Map Ctrl+Shift+3 for Date formatting and Ctrl+Shift+2 for Scientific."; break;
            case 5: note = "LIBRE CALC: The system is capped at a maximum of 10,000 worksheets per file."; break;
            case 6: note = "LIBRE CALC: A cell is defined as the intersection point where a row and column meet."; break;
            case 7: note = "LIBRE CALC: A highlighted group of adjacent cells is officially termed a Range."; break;
            case 8: note = "LIBRE CALC: Use the NOW() function to display the current Date and Time on the HUD."; break;
            case 9: note = "LIBRE CALC: LIBRE CALCulate future deadlines based on working days using the WORKDAY() function."; break;
            case 10: note = "LIBRE CALC: Access the Rename Sheet option by navigating to the Sheet Menu."; break;
            case 11: note = "LIBRE CALC: There are exactly 3 ways to rename a worksheet within the system."; break;

            // --- LIBREOFFICE LIBREE IMPRESS ---
            case 12: note = "LIBREE IMPRESS: Identify all presentation scrolls by the .odp extension tag."; break;
            case 13: note = "LIBREE IMPRESS: The maximum Font Size allowed by the engine is 999.9."; break;
            case 14: note = "LIBREE IMPRESS: Check the Status Bar at the bottom of the screen to adjust the Zoom level."; break;
            case 15: note = "LIBREE IMPRESS: Objective failed if you look for 'Equation' in the Insert Table menu."; break;
            case 16: note = "LIBREE IMPRESS: Modify Snap Object coordinates via X, Y, and Horizontal Type."; break;
            case 17: note = "LIBREE IMPRESS: 'Color' is a restricted attribute that cannot be modified in Slide Transitions."; break;

            // --- LIBREOFFICE WRITER & GLOBAL ---
            case 18: note = "WRITER: Reference table cells by enclosing the address in < > angle brackets."; break;
            case 19: note = "GLOBAL: Map interface keys: Ctrl+Shift+J for Full Screen and F11 for Styles."; break;
            case 20: note = "GLOBAL: Activate Shift + End to select text from cursor to the end of the line."; break;
            case 21: note = "GLOBAL: Access the Template Vault quickly using the Ctrl+Shift+N command."; break;
            case 22: note = "GLOBAL: Use Ctrl+] to increase font size and Ctrl+[ to decrease it."; break;
            case 23: note = "GLOBAL: Use Mail Merge to generate a mass batch of personalized documents."; break;
            case 24: note = "GLOBAL: Use F5 for Navigator; '@' is an invalid character for bookmark names."; break;
            case 25: note = "GLOBAL: LibreOffice is the designated Open Source software suite for this mission."; break;

            // --- NETWORKING & SOCIAL MEDIA ---
            case 26: note = "PROTOCOL: SMTP is the standard protocol used for sending mail across the network."; break;
            case 27: note = "NETWORK: ARPANET was the original network that eventually evolved into the Internet."; break;
            case 28: note = "NETWORK: An IPv4 address is formatted using a 32-bit structure."; break;
            case 29: note = "NETWORK: M2M stands for Machine to Machine communication."; break;
            case 30: note = "TELEGRAM: The maximum transport capacity for files on this platform is 2GB."; break;
            case 31: note = "WHATSAPP: This system uses End-to-End Encryption to secure private conversations."; break;
            case 32: note = "TWITTER: Use the Retweet feature to reshare another user's post to your followers."; break;
            case 33: note = "GMAIL: Transport files larger than 25MB by utilizing the Google Drive portal."; break;
            case 34: note = "SOCIAL: The primary purpose of these platforms is Networking and Communication."; break;
            case 35: note = "SOCIAL: Content that spreads rapidly across the map is labeled 'Viral'."; break;

            // --- HARDWARE & FUNDAMENTALS ---
            case 36: note = "HARDWARE: First-generation systems were powered by Vacuum Tube components."; break;
            case 37: note = "HARDWARE: The CPU acts as the brain, while the ALU handles arithmetic and logic."; break;
            case 38: note = "HARDWARE: Connect your display unit using the VGA port."; break;
            case 39: note = "HARDWARE: The Flip-Flop circuit is the core component used for memory storage."; break;
            case 40: note = "CYBER: The 'Creeper' was the first recorded virus to breach digital defenses."; break;
            case 41: note = "HISTORY: Steve Jobs is identified as the founder of the Apple Computer faction."; break;
            case 42: note = "LOGIC: 'Sorting' is the mechanism used to organize data into a specific order."; break;

            // --- BANKING & INSTITUTION ---
            case 43: note = "BANKING: IMPS, NEFT, and RTGS are standard modes for digital money transfer."; break;
            case 44: note = "INSTITUTION: NPCI is the National Payments Corporation of India."; break;
            case 45: note = "INSTITUTION: NIELIT is the governing guild for all O Level course trials."; break;
            case 46: note = "STANDARD: A cheque remains a valid financial document for 3 months after issue."; break;
            case 47: note = "STANDARD: Every mobile unit is tracked by its unique IMEI identity code."; break;
            case 48: note = "STANDARD: The QR code was originally developed and trademarked by Denso Wave."; break;
            case 49: note = "ECONOMY: Interest on Savings Deposits is typically credited half-yearly."; break;
            case 50: note = "SYSTEM: A total of 50 core objectives have been logged for this training phase."; break;
            
            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();