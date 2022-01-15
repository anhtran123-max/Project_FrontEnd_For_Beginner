$('.side-bar__item').click(function(){

    $('.side-bar__item').removeClass('side-bar__item--active')
    $(this).addClass('side-bar__item--active')

    let $indicator = $('.side-bar__indicator')

    let previousOffset = $indicator.parent('.side-bar__item').offset()
    let currentOffset = $(this).offset() //{ top, left }

    let distance = currentOffset.top - previousOffset.top

    $indicator.css('transform', 'translateY(' + distance + 'px)')

})

$.fn.switchButton = function(){
    let $switchButtons = this
    let $switchButtonReplaced = $()

    $switchButtons.each(function(){
        let $switchButton = $('<div class="switch-button"></div>')
        let $input = $('<input type="hidden"/>').val($(this).val())
        let $label = $('<label for="" class="switch-button__label">OFF</label>')
        let $background = $('<span class="switch-button__background"></span>')
        let $indicator = $('<span class="switch-button__indicator"></span>')

        $indicator.appendTo($background)

        $input.appendTo($switchButton)
        $label.appendTo($switchButton)
        $background.appendTo($switchButton)

        $(this).replaceWith($switchButton)

        $switchButtonReplaced = $switchButtonReplaced.add($switchButton)


        $switchButton.click(function(){
            let $input = $(this).children('input')
            let $label = $(this).children('.switch-button__label')

            let value = $input.val()

            if(value === 'true'){
                $label.text('OFF')
                $input.val('false')
            }
            else{
                $label.text('ON')
                $input.val('true')
            }

            $switchButton.trigger('change', $input.val())
        })

        
    })

    return $switchButtonReplaced
}

$.fn.switchCard = function(){
    let $cards = this
    let $switchButtons = $cards.find('.switch-button').switchButton()
    $switchButtons.on('change', function(e, value){
        let switchButton = this

        $cards.each(function(index,  card){
            if(card.contains(switchButton)){
                let $card = $(card)
                if(value === 'true'){
                    $card.addClass('xcard--active')
                }
                else{
                    $card.removeClass('xcard--active')
                }
            }
        })
    })
}


$('.xcard').switchCard()

$('.living-room-temperature .switch-button').switchButton()