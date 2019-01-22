$(function(){
  $('#308').click(function(){
    $('#show').html('....loading...');

    $.ajax({
        type: "GET",
        url: "https://bablabs.com/openapi/v1/campuses/biV2tiK41v/stores/LTIzODA3NTM2",
        headers: {
          "Accesstoken":"1k1SGHbvI8J5DdwTIScbntbZpWnTvb7yFWJr0xZ0S1qxpkSlBA"
        },
        data: {
          "type": "campuses",
          "keyword": "중앙대학교 서울캠퍼스",
          "date": "2019-01-21"
        },
        success:function(data){
            $('#show').html(JSON.stringify(data));
        }
    })
  })
})
