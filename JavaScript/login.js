<!--Upload your code here Sunny-->
<script>
        $(function () {
            // Script for user function restrion on browser //
            //var OldHTML = $('#DivUserName').html();
            //$('#DivUserName').html('<input class="form-control" data-val="true" data-val-required="Enter Username" id="UserName" name="UserName" placeholder="Username" type="text" ">' +'<span class="field-validation-error" data-valmsg-for="UserName" data-valmsg-replace="true"></span>')
            $('#UserName').focus()
            $(document).keydown(function (event) {
                if (event.keyCode == 123) {
                    return false;
                }
                else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                    return false;
                }
            });
            // Script for user function restrion on browser //
            $(document).keydown(function (event) {
                if (event.keyCode >= 112 && event.keyCode <= 122) {
                    return false;
                }
                else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                    return false;
                }
            });
            //// Disable Right Click and Cntrl Functions ---//
            $("body").on("contextmenu", function (e) {
                return false;
            });
            document.onkeydown = function (e) {
                if (e.ctrlKey &&
                    (
                     e.keyCode === 85
                    )) {

                    return false;
                } else {
                    return true;
                }
            };
            // Disable Copy Paste//
            $(document).bind("cut copy paste", function (e) {
                e.preventDefault();
            });

        });
        function OnSuccess(result) {
            if (result.Isnew == true) {
                $('#btn_OpenModel').click();
            }
            else {
                if (result.msg != "") {
                    $('#divtxtDanger').html(result.msg);
                    $('#divtxtDanger').css('display', 'block');
                    $('#divtxtDanger').fadeOut(10000);
                }
                if (result.InvalidLogin > 3) {
                    location.reload();
                }
                if (result.Url != "") {
                    window.location.href = result.Url;
                }
            }
        }
        $('#myModal').on('shown.bs.modal', function () {
            setTimeout(function () {
                $('#QuestionId').focus();
            }, 1000);
        })
        function OnHintSuccess(result) {
            if (result.msg != "") {
                $('#divtxtMsg').html(result.msg)
            }
            if (result.Url != "") {
                window.location.href = result.Url;
            }
        }
        $(document).ready(function () {
            $('input').attr('autocomplete', 'false');

        });
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });
        $(document).on('blur', '#Password', function () {
            $('#CaptchaInputText').focus();

        });
        $(document).on('blur', '#CaptchaInputText', function () {
            $('#btn_submit').focus();

        });
    </script>
    
    <script>
        $(document).ready(function () {
            var specialChars = "!@$&"
            var check = function (string) {
                for (i = 0; i < specialChars.length; i++) {
                    if (string.indexOf(specialChars[i]) > -1) {
                        return true
                    }
                }
                return false;
            }
            $('#NewPassword').keyup(function () {
                // keyup code here
                // set password variable
                var pswd = $(this).val();
                //Pvalidate the length
                if (pswd.length < 8) {
                    $('#length').removeClass('Pvalid').addClass('Pinvalid');
                } else {
                    $('#length').removeClass('Pinvalid').addClass('Pvalid');
                }
                //Pvalidate letter
                if (pswd.match(/[a-z]/)) {
                    $('#letter').removeClass('Pinvalid').addClass('Pvalid');
                } else {
                    $('#letter').removeClass('Pvalid').addClass('Pinvalid');
                }

                //Pvalidate capital letter
                if (pswd.match(/[A-Z]/)) {
                    $('#capital').removeClass('Pinvalid').addClass('Pvalid');
                } else {
                    $('#capital').removeClass('Pvalid').addClass('Pinvalid');
                }
                //Pvalidate number
                if (pswd.match(/\d/)) {
                    $('#number').removeClass('Pinvalid').addClass('Pvalid');
                } else {
                    $('#number').removeClass('Pvalid').addClass('Pinvalid');
                }
                //Pvalidate special chractor
                if (check(pswd) == true) {
                    $('#SpecialChracter').removeClass('Pinvalid').addClass('Pvalid');

                } else {
                    $('#SpecialChracter').removeClass('Pvalid').addClass('Pinvalid');
                }
                //if (isValid(pswd) == true) {

                //    $('#SpecialChracter').removeClass('Pinvalid').addClass('Pvalid');
                //}
                //else {

                //    $('#SpecialChracter').removeClass('Pvalid').addClass('Pinvalid');
                //}
            }).focus(function () {
                $('#pswd_info').show();
            }).blur(function () {
                $('#pswd_info').hide();
            });

        });
        // enable validation on kepress and key UP
        $.validator.setDefaults({
            onfocusout: function (element) {
                $(element).valid();
            }
        });
        $(document).on('change', '#QuestionId', function myfunction() {
            $('#Answer').val('');
        });
        $(document).on('blur', '#btn_submit', function myfunction() {

            $("[tabindex='" + 1 + "']").focus();
        });
        $(document).on('blur', '#Btn_PopupSubmit', function myfunction() {

            $("[tabindex='" + 4 + "']").focus();
        });
        $(document).on('blur', '#UserName', function myfunction() {

            $('#Password').val('');
        });

    </script>
