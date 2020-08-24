//
///* add code here */
var daysOfWeek = new Array(" Mon", " Tues", " Wed", " Thur", " Fri");
daysOfWeek.push(" Sat");
daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br>");

document.write("<table border=1");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++){
    if (daysOfWeek[i].length < 5)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");
for (var i = 1; i < 31; i++){
    document.write("<th>" + i + "</th>");
    if (i / 7 === 1)
        document.write("</tr>");
    if (i / 7 === 2)
        document.write("</tr>");
    if (i / 7 === 3)
        document.write("</tr>");
    if (i / 7 === 4)
        document.write("</tr>");
}
document.write("</tr>");
document.write("</table>");