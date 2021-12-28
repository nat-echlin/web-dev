function generate() {

    fnames = ["Tara", "Rebekah", "Michael", "Joseph", "James", "Maria"]
    lnames = ["Conn", "Lee", "Hartman", "Sweeney", "Groh", "Doolittle"]
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    tally = Math.round(encodeHTML(document.getElementById("number").value).replace(/\s+/g, ' '));
    numsatend = Math.round(encodeHTML(document.getElementById("numberatend").value).replace(/\s+/g, ' '));
    domain = encodeHTML(document.getElementById("domain").value).replace(/\s+/g, ' ');
    if (domain[0] != "@") domain = "@" + domain;
    if (tally > 5000 || domain == "") alert("5000 max");
    else {
            var textbox = document.getElementById("textbox");
            textbox.style.display = 'block';
            var rows = tally;
            if (tally > 50) rows = 50;
            textbox.value = "";
            textbox.setAttribute("rows", rows);
            var maxlength = 10;
            for (var i = 0; i < tally; i++) {
                    if (i <= 10000) {
                            fnames.sort(randOrd);
                            lnames.sort(randOrd);
                            var newemail = fnames[0] + lnames[0];
                            for (var j = 0; j < numsatend; j++) {
                                    nums.sort(randOrd);
                                    newemail += nums[0];
                            }
                            newemail += domain;
                            textbox.value += newemail;
                            if (i != tally - 1) textbox.value += "\n";
                            if (newemail.length > maxlength) maxlength = newemail.length
                    }
                    textbox.setAttribute("cols", maxlength + 8);
            }
    }
}

function randOrd() {
    return (Math.round(Math.random()) - 0.5);
}
function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}