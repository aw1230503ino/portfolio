
particlesJS("particles-js"), {
    "particles": {
      "number": {
        "value": 1,//縺薙�謨ｰ蛟､繧貞､画峩縺吶ｋ縺ｨ邏吝聖髮ｪ縺ｮ謨ｰ縺悟｢玲ｸ帙〒縺阪ｋ
        "density": {
          "enable": false,
          "value_area": 400
        }
      },
      "color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC", "#4D4398", "#E85298"]//邏吝聖髮ｪ縺ｮ濶ｲ縺ｮ謨ｰ繧貞｢励ｄ縺吶％縺ｨ縺悟�譚･繧�
      },
      "shape": {
        "type": "polygon",//蠖｢迥ｶ縺ｯpolygon繧呈欠螳�
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4//螟夊ｧ貞ｽ｢縺ｮ隗偵�謨ｰ
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 20,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 5.305992965476349,
        "random": true,//繧ｵ繧､繧ｺ繧偵Λ繝ｳ繝繝�縺ｫ
        "anim": {
          "enable": true,
          "speed": 1.345709068776642,
          "size_min": 0.8,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 0.5,//縺薙�謨ｰ蛟､繧貞ｰ上＆縺上☆繧九→繧�▲縺上ｊ縺ｪ蜍輔″縺ｫ縺ｪ繧�
        "direction": "bottom",//荳九↓蜷代°縺｣縺ｦ關ｽ縺｡繧�
        "random": false,//蜍輔″縺ｯ繝ｩ繝ｳ繝繝�縺ｫ縺ｪ繧峨↑縺�ｈ縺�↓
        "straight": false,//蜍輔″繧偵→縺ｩ繧√↑縺�
        "out_mode": "out",//逕ｻ髱｢縺ｮ螟悶↓蜃ｺ繧九ｈ縺�↓謠丞�
        "bounce": false,//霍ｳ縺ｭ霑斐ｊ縺ｪ縺�
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      },
    },
    "retina_detect": true
  };
  
  //繧ｿ繧､繝�繝ｩ繧､繝ｳ
  //邱壹′莨ｸ縺ｳ繧九◆繧√�險ｭ螳壹ｒ髢｢謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
  function ScrollTimelineAnime() {
    $('.timeline li').each(function () {// 縺昴ｌ縺槭ｌ縺ｮli隕∫ｴ�縺ｮ
      var elemPos = $(this).offset().top;// 荳翫°繧峨�鬮倥＆蜿門ｾ�
      var scroll = $(window).scrollTop();// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､蜿門ｾ�
      var windowHeight = $(window).height();// window縺ｮ鬮倥＆蜿門ｾ�
      var startPoint = 300; //邱壹ｒ繧ｹ繧ｿ繝ｼ繝医＆縺帙ｋ菴咲ｽｮ繧呈欠螳壺ｻ繝ｬ繧､繧｢繧ｦ繝医↓繧医▲縺ｦ隱ｿ謨ｴ縺励※縺上□縺輔＞
      if (scroll >= elemPos - windowHeight - startPoint) {
        var H = $(this).outerHeight(true)//li縺ｮ菴咏區縺ｨ鬮倥＆繧貞性繧√◆謨ｰ蛟､繧貞叙蠕�
        //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､縺九ｉ隕∫ｴ�縺ｾ縺ｧ縺ｮ鬮倥＆繧貞ｼ輔＞縺溷､繧偵〕i縺ｮ鬮倥＆縺ｮ蜊雁�縺ｮ繝代�繧ｻ繝ｳ繝医〒蜃ｺ縺�
        var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;//li縺ｮ菴咏區縺ｨ鬮倥＆縺ｮ蜊雁�縺ｧ邱壹ｒ100��↓莨ｸ縺ｰ縺�
  
        // 100% 繧定ｶ�∴縺溘ｉ縺壹▲縺ｨ100%繧貞�繧檎ｶ壹￠繧�
        if (percent > 100) {
          percent = 100;
        }
        // 繝懊�繝繝ｼ縺ｮ髟ｷ縺輔ｒ繧ｻ繝�ヨ
        $(this).children('.border-line').css({
          height: percent + "%", //CSS縺ｧ繝代�繧ｻ繝ｳ繝域欠螳�
        });
      }
    });
  }
  
  