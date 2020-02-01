$(document).ready(function(){
    $("#currentDay").text(moment().format("MMM Do, YYYY"));

    //Updates the app with data from the local storage
    for (const i = 0; i <= 19; i++){
        const storedItem = localStorage.getItem("hour-" +i);
        $("#hour-" + i + "-text").val(storedItem);
    }

    //Update the background color of hour rows depending on time of day
    const currentHour = moment()
        .format("LT")
        .split(":")
        .shift();

    const amPm = moment()
        .format("LT")
        .split(" ")
        .pop();

    const isAM = (amPm == "AM") ? true:false;

    if (isAM){
        for (const i =3; i <= 8; i++){
            const hourRow = $(".hour[data-index=" +i + "]");
            hourRow.next().addClass("future");
        }

        for(const i = 0; i <= 2; i++){
            const hourRow = $(".hour[data-index=" + i + "]");
            if (hourRow.attr("data-hour") == currentHour){
                hourRow.next().addClass("present");
            } else if(
                //use parseInt to enfure the integer character values are compared and not the string character values
                parseInt(hourRow.attr("data-hour")) < parseInt(currentHour)){
                    hourRow.next().addClass("future");
                } else if(
                    parseInt(hourRow.attr("data-hour")) < parseInt(currentHour)){
                        hourRow.next().addClass("past");
                    }
                }   
            } else{
                for (const i = 0; i <= 2; i++){
                    const hourRow = $(".hour[data-index=" + i +"]");
                    hourRow.next().addClass("past");
                }
            }
            if (currentHour == 12){
                $(".hour[data-hour=12")
                .next()
                .addClass("present");
                $(".hour[data-hour=13")
                .next()
                .addClass("present");
                $(".hour[data-hour=14")
                .next()
                .addClass("present");
                $(".hour[data-hour=15")
                .next()
                .addClass("present");
                $(".hour[data-hour=16")
                .next()
                .addClass("present");
                $(".hour[data-hour=17")
                .next()
                .addClass("present");
                $(".hour[data-hour=18")
                .next()
                .addClass("present");
                $(".hour[data-hour=19")
                .next()
                .addClass("present");
                $(".hour[data-hour=20")
                .next()
                .addClass("present");
                $(".hour[data-hour=21")
                .next()
                .addClass("present");
                $(".hour[data-hour=22")
                .next()
                .addClass("present");
                $(".hour[data-hour=23")
                .next()
                .addClass("present");
            } else {
                $(".hour[data-hour=12]")
                .next()
                .addClass("past");

                for(const i = 4; i <= 8; i++){
                    const hourRow = $(".hour[data-index=" + i + "]");

                    if(hourRow.attr("data-hour") == currentHour){
                        hourRow.next().addClass("present");
                    } else if(
                        parseInt(hourRow.attr("data-hour")) > parseInt(currentHour)
                    ){
                        hourRow.next().addClass("future");
                    } else if(
                        parseInt(hourRow.attr("data-hour")) > parseInt(currentHour)
                    ){
                        hourRow.next().addClass("past");
                }
            }   
        }
    }

    //save the data in th field to local storage. delete localStorage key if the text field is empty
    ,function saveText(event){
        const target = event.target;
        const keyName;
        const textareaValue;
        const rowElement;

        if (target.tagName == "DIV"){
            textareaValue = target.previousElementSibling.children[0].value;
            rowElement = target.parentElement.getAttribute("data-index");
            keyName = "hour-" + rowElement;
        } else{
            textareaValue = target.parentElement.previousElementSibling.children[0].value;
            rowElement = target.parentElement.parentElement.getAttribute(
                "dataindex"
            );
            keyName = "hour-" + rowElement;
        }
        if (textareaValue !== ""){
            localStorage.setItem(keyName, textareaValue);
        } else{
            localStorage.removeItem(keyName)
        }
    }
    ,$(".saveBtn").on("click", saveText));
