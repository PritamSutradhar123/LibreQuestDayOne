/*:
 * @plugindesc CCC Quiz Engine - Complete 50 MCQ Logic with Auto-Wrap.
 * @author Gemini
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 *       2. Use \V[1] for Question, \V[4]-\V[7] for Choices.
 *       3. Variable #3 stores the Correct Answer Index (1-4).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "Match the shortcut key with its function in LibreOffice.";
                a = "1-ii, 2-i, 3-iv, 4-iii"; b = "1-i, 2-ii, 3-iv, 4-iii"; 
                c = "1-ii, 2-iv, 3-i, 4-iii"; d = "1-iii, 2-i, 3-iv, 4-ii";
                ans = 1; break; //
            case 2:
                q = "Which of the following is a first computer virus?";
                a = "Sasser"; b = "Blaster"; c = "Creeper"; d = "Reeper";
                ans = 3; break; //
            case 3:
                q = "What is the maximum file size that can be shared on Telegram?";
                a = "10 MB"; b = "50 MB"; c = "100 MB"; d = "2 GB";
                ans = 4; break; //
            case 4:
                q = "Which option is not available when inserting a table in Impress?";
                a = "Total Row"; b = "Last Column"; c = "Equation"; d = "Header Row";
                ans = 3; break; //
            case 5:
                q = "Which key do you use to convert a number into currency format in LibreOffice Calc?";
                a = "Ctrl+Shift+1"; b = "Ctrl+Shift+3"; c = "Ctrl+Shift+4"; d = "Ctrl+Shift+5";
                ans = 3; break; //
            case 6:
                q = "SMTP stands for:";
                a = "Simple Mail Terminal Protocol"; b = "Simple Mail Transfer Protocol"; 
                c = "Simple Mail Transport Protocol"; d = "None of the above";
                ans = 2; break; //
            case 7:
                q = "What is the term for content that spreads rapidly and widely on social media?";
                a = "Viral"; b = "Bacterial"; c = "Chronic"; d = "Static";
                ans = 1; break; //
            case 8:
                q = "What is the maximum font size that can be set in Impress?";
                a = "96"; b = "127"; c = "999.9"; d = "2000";
                ans = 3; break; //
            case 9:
                q = "What does NPCI stand for?";
                a = "National Productivity and Commerce"; b = "National Payments and Credit"; 
                c = "National Payments Corporation of India"; d = "National Public Credit";
                ans = 3; break; //
            case 10:
                q = "What is the validity period of a cheque?";
                a = "4 Months"; b = "3 Months"; c = "1 Month"; d = "Unlimited";
                ans = 2; break; //
            case 11:
                q = "Which organization conducts the O Level course?";
                a = "IGNOU"; b = "NIOS"; c = "NIELIT"; d = "DOEACC";
                ans = 3; break; //
            case 12:
                q = "What is the use of Shift + End?";
                a = "Selects from cursor to start of line"; b = "Selects from cursor to end of line"; 
                c = "Selects whole document"; d = "Moves cursor to end of document";
                ans = 2; break; //
            case 13:
                q = "What is the encryption feature in WhatsApp that ensures privacy?";
                a = "Secure Socket Layer (SSL)"; b = "Transport Layer Security (TLS)"; 
                c = "End-to-End Encryption"; d = "Two-Factor Authentication";
                ans = 3; break; //
            case 14:
                q = "First generation computer systems used:";
                a = "Transistors"; b = "Vacuum tubes"; c = "Magnetic cores"; d = "Silicon chips";
                ans = 2; break; //
            case 15:
                q = "LibreOffice impress file extension is:";
                a = ".odp"; b = ".ods"; c = ".xls"; d = ".calc";
                ans = 1; break; //
            case 16:
                q = "Which property of Snap Object can be adjusted in LibreOffice Impress?";
                a = "X-Position"; b = "Y-Position"; c = "Horizontal Type"; d = "All the above";
                ans = 4; break; //
            case 17:
                q = "Which is not a valid property of Transition on slide?";
                a = "Variant"; b = "Sound"; c = "Duration"; d = "Color";
                ans = 4; break; //
            case 18:
                q = "QR code is a registered trademark developed by which company?";
                a = "IBM"; b = "Cyber Cloud Software"; c = "Denso Wave"; d = "Google";
                ans = 3; break; //
            case 19:
                q = "Shortcut Key to Auto Filter in LibreOffice Calc is:";
                a = "CTRL+Shift+L"; b = "CTRL+Shift+A"; c = "CTRL+Shift+F"; d = "CTRL+Shift+K";
                ans = 1; break; //
            case 20:
                q = "IMPS, NEFT, and RTGS are related to which of the following?";
                a = "Insurance"; b = "Digital Payment"; c = "Income Tax"; d = "GST Filing";
                ans = 2; break; //
            case 21:
                q = "Where does the zoom option appear in LibreOffice Impress?";
                a = "Title bar"; b = "Menu bar"; c = "Status bar"; d = "Task bar";
                ans = 3; break; //
            case 22:
                q = "What is the shortcut key of template?";
                a = "Ctrl+Shift+M"; b = "Ctrl+Shift+N"; c = "Ctrl+Shift+C"; d = "Ctrl+Shift+T";
                ans = 2; break; //
            case 23:
                q = "What is the full form of IMEI?";
                a = "International Mobile Equipment Identity"; b = "Interchangeable Mobile Equipment"; 
                c = "Identity Interacted Mobile Equipment"; d = "Identity Integrated Mobile";
                ans = 1; break; //
            case 24:
                q = "Match font sizes: i-increase, ii-decrease, iii-superscript, iv-subscript.";
                a = "i-b, ii-c, iii-a, iv-d"; b = "i-b, ii-a, iii-d, iv-c"; 
                c = "i-c, ii-d, iii-a, iv-b"; d = "i-d, ii-c, iii-b, iv-a";
                ans = 1; break; //
            case 25:
                q = "Match the component with its primary role (CPU, ALU, OS, Printer).";
                a = "1-ii, 2-iv, 3-iii, 4-i"; b = "1-iii, 2-ii, 3-iv, 4-i"; 
                c = "1-ii, 2-iii, 3-iv, 4-i"; d = "None";
                ans = 3; break; //
            case 26:
                q = "Which is the spreadsheet component of LibreOffice?";
                a = "Excel"; b = "Spreadsheet"; c = "Writer"; d = "Calc";
                ans = 4; break; //
            case 27:
                q = "Match formats: 1-Currency, 2-Date, 3-Number, 4-Scientific.";
                a = "A1, B2, C3, D4"; b = "A3, B4, C2, D1"; c = "A4, B3, C1, D2"; d = "None";
                ans = 2; break; //
            case 28:
                q = "Who is the founder of Apple Computer?";
                a = "Bill Gates"; b = "Steve Jobs"; c = "John McCarthy"; d = "Stephane Lyndse";
                ans = 2; break; //
            case 29:
                q = "Which port is used to connect a monitor?";
                a = "PS2"; b = "USB"; c = "LAN"; d = "VGA";
                ans = 4; break; //
            case 30:
                q = "Which is not true about Bookmarks?";
                a = "@ character cannot be used"; b = "Navigator opened by F5"; 
                c = "Lower list contains all bookmarks"; d = "To Delete, select and press Delete button";
                ans = 4; break; //
            case 31:
                q = "Which circuit is used as a 'Memory device' in computers?";
                a = "Rectifier"; b = "Flip-Flop"; c = "Comparator"; d = "Attenuator";
                ans = 2; break; //
            case 32:
                q = "Which of the following is an Open Source Software?";
                a = "Photoshop"; b = "MS Word"; c = "Skype"; d = "LibreOffice";
                ans = 4; break; //
            case 33:
                q = "Create a batch of documents that are personalized for each recipient:";
                a = "Customised files"; b = "Personalised E-mails"; c = "Mail merge utility"; d = "None";
                ans = 3; break; //
            case 34:
                q = "How many worksheets are available in Libre Office Calc?";
                a = "1024"; b = "10000"; c = "32000"; d = "42000";
                ans = 2; break; //
            case 35:
                q = "The network that eventually became the internet was first called:";
                a = "WAN"; b = "MAN"; c = "LAN"; d = "ARPANET";
                ans = 4; break; //
            case 36:
                q = "What is the name of a mechanism to arrange data in a particular order?";
                a = "Sorting"; b = "Searching"; c = "Filtering"; d = "Validating";
                ans = 1; break; //
            case 37:
                q = "Interest on Savings Deposit is paid:";
                a = "Yearly"; b = "Every month"; c = "Half yearly"; d = "Quarterly";
                ans = 3; break; //
            case 38:
                q = "What is the shortcut key to move from one cell to another in LibreOffice Calc?";
                a = "Tabs"; b = "Ctrl+Q"; c = "Ctrl+M"; d = "None";
                ans = 1; break; //
            case 39:
                q = "A block of adjacent cells in a worksheet which is highlighted is called:";
                a = "Block of cells"; b = "Range of Cells"; c = "Both"; d = "None";
                ans = 2; break; //
            case 40:
                q = "What is the primary purpose of social media platforms?";
                a = "Online shopping"; b = "Networking and communication"; 
                c = "Weather forecasting"; d = "Gaming";
                ans = 2; break; //
            case 41:
                q = "Which function calculates a date that is a specified number of working days?";
                a = "WORKDAY()"; b = "DAY()"; c = "WORKDATE()"; d = "DAYM()";
                ans = 1; break; //
            case 42:
                q = "In LibreOffice Calc, the Rename Sheet option is available in which menu?";
                a = "Format Menu"; b = "Edit Menu"; c = "Tools"; d = "Sheet";
                ans = 4; break; //
            case 43:
                q = "A cell is the intersection of a _____ and a _____.";
                a = "text, number"; b = "row, column"; c = "sheet, column"; d = "sheet, row";
                ans = 2; break; //
            case 44:
                q = "IPv4 address contains _____ bits.";
                a = "4"; b = "32"; c = "12"; d = "8";
                ans = 2; break; //
            case 45:
                q = "What is the full form of M2M?";
                a = "Mechanism to Machine"; b = "Machine to Machine"; 
                c = "Multiple to Multiple"; d = "Machine to Multiple";
                ans = 2; break; //
            case 46:
                q = "How can you send a file larger than 25 MB in Gmail?";
                a = "Through Google Drive"; b = "Through Google USB"; 
                c = "Through Google Chrome"; d = "None of these";
                ans = 1; break; //
            case 47:
                q = "There are _____ ways we can rename a worksheet?";
                a = "1"; b = "2"; c = "3"; d = "4";
                ans = 3; break; //
            case 48:
                q = "Which of the following functions is used to display current date and time?";
                a = "Date()"; b = "Today()"; c = "Now()"; d = "Time()";
                ans = 3; break; //
            case 49:
                q = "Which feature on Twitter allows users to reshare someone else's tweet?";
                a = "Like"; b = "Comment"; c = "Retweet"; d = "Follow";
                ans = 3; break; //
            case 50:
                q = "How do you reference cells in a Writer text table?";
                a = "Square brackets [A1]"; b = "Parentheses (A1)"; 
                c = "Angle brackets <A1>"; d = "Curly braces {A1}";
                ans = 3; break; //
                
            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        // --- Automatic Word Wrap Logic ---
        function wrap(str) {
            var max = 45; 
            var words = str.split(' ');
            var cur = '';
            var out = '';
            for (var i = 0; i < words.length; i++) {
                if ((cur + words[i]).length <= max) {
                    cur += (cur === '' ? '' : ' ') + words[i];
                } else {
                    out += cur + '\n';
                    cur = words[i];
                }
            }
            return out + cur;
        }

        // --- FIXED LOGIC: Fills Variable 16 with the Answer TEXT ---
        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(1, wrap(q));        // Question Text
        this.setValue(3, ans);            // Current_Answer (ID 1-4)
        this.setValue(4, a);              // Choice 1
        this.setValue(5, b);              // Choice 2
        this.setValue(6, c);              // Choice 3
        this.setValue(7, d);              // Choice 4
        // Debugging: This will print the answer to the F12 console
        console.log("Question Loaded. Correct Answer for Var 16 is: " + correctStr);
        
        // Force the value as a String
        $gameVariables.setValue(16, String(correctStr));
    };
})();