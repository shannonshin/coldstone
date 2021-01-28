$(document).ready(function(){
    //When page loads
    $('.tab_content').hide();
    $('ul.tabs li:first').addClass('active').show();
    $('.tab_content:first').show();
    
    //On click event
    $('ul.tabs li').click(function(){
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    })
    
    //When page loads
    $('.tab_content2').hide();
    $('ul.tabs2 li:first').addClass('active').show();
    $('.tab_content2:first').show();
    
    //On click event
    $('ul.tabs2 li').click(function(){
        $('ul.tabs2 li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content2').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    })
    
})