$(document).ready(function ()
{
    const searchInput = $("#searchInput");
    const searchOutput = $("#output");
    const liveSearchForm = $("#liveSearchForm");
    searchInput.keyup( e =>
    { 
        const query = searchInput.val();
        if (query !== "")
        {
            $.ajax({
                method: liveSearchForm.attr("method"),
                url: liveSearchForm.attr("action"),
                data: liveSearchForm.serialize(),
                success: response =>
                {
                    searchOutput.html(response).css("display", "block");
                    searchInput.focusin(() => {
                        searchOutput.html(response).css("display", "block");
                    });
                    searchInput.focusout(() => {
                        searchOutput.css("display", "none");
                    });
                },
                error: response =>
                {
                    console.log(response);
                }
            });
        } else
        {
            searchOutput.css("display", "none");
        }  
    });
});