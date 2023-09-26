//intro
var controller = new ScrollMagic.Controller();

var inner_intro = document.getElementsByClassName("in_intro");
var outer_intro = document.getElementsByClassName("out_intro");

var myself_intro = new TimelineMax();

TweenLite.defaultEase = Linear.easeNone;

//intro fx
myself_intro.from(outer_intro, 0.25, { scaleX: 0 });
myself_intro.from(inner_intro, 0.65, { yPercent: 100, ease: Back.easeOut });

new ScrollMagic.Scene({
    triggerElement: "#header",
    triggerHook: 0.15,
})
    .setTween(myself_intro)
    // .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 40
    // })
    .addTo(controller);

// portrait picture
// var fadeOut = new ScrollMagic.Scene({
//     triggerElement: "#fadeOut",
//     triggerHook: 0.15,
//     reverse: true
// })
//     .setTween("#fadeout-trigger", 1, { opacity: 0 }) // trigger a TweenMax.to tween
//     .addIndicators({ 
//         name: "1 (duration: 0)",
//         colorTrigger: "white",
//         colorStart: "white",
//         colorEnd: "white",
//         indent: 10
//     })
//     .addTo(ctrl);

//summarized work intro
var project_works_summary = new TimelineMax();
project_works_summary.staggerFrom(".box", 1.25, {
    scale: 0,
    cycle: {
        y: [-50, 50]
    },
    ease: Elastic.easeOut,
    stagger: {
        from: "center",
        amount: 0.25
    }
});

new ScrollMagic.Scene({
    triggerElement: "#stage",
    triggerHook: 0.15
})
    // .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 5
    // })
    .setTween(project_works_summary)
    .addTo(controller);










//talents
var inner_wp = document.getElementsByClassName("in_talent");
var outer_wp = document.getElementsByClassName("out_talent");

var talents_intro = new TimelineMax();

talents_intro.from(outer_wp, 0.25, { scaleX: 0 });
talents_intro.from(inner_wp, 0.65, { yPercent: 100, ease: Back.easeOut });

new ScrollMagic.Scene({
    triggerElement: "#talents",
    triggerHook: 0.15,
})
    .setTween(talents_intro)
    // .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 40
    // })
    .addTo(controller);

//Talent amoung us bezier curve
const runPath = {
    curviness: 0.05,
    autoRotate: true,
    values: [
        { x: window.innerWidth - (window.innerWidth * 0.13), y: 0 },
        { x: window.innerWidth - (window.innerWidth * 0.13), y: window.innerHeight - (window.innerHeight * 0.889) },
        { x: window.innerWidth - (window.innerWidth * 1.026), y: window.innerHeight - (window.innerHeight * 0.889) },
        { x: window.innerWidth - (window.innerWidth * 1.026), y: 0 },
    ]
}

const talent_intro_animation = new TimelineLite({
    onComplete: function () {
        this.restart()
    }
});

talent_intro_animation.add(
    TweenLite.to('.among-us', 9, {
        bezier: runPath,
    })
);






//Skill_set
var skill_set = new TimelineMax();
skill_set.staggerFrom(".skills", 1.5, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.75
  }
});

new ScrollMagic.Scene({
  triggerElement: "#skillset",
  duration: "50%",
})
//   .addIndicators({
//     name: "Box Timeline",
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white"
//   })
  .setTween(skill_set)
  .addTo(controller);





//work projects
var inner_wp = document.getElementsByClassName("in_wp");
var outer_wp = document.getElementsByClassName("out_wp");

var work_projects = new TimelineMax();

work_projects.from(outer_wp, 0.25, { scaleX: 0 });
work_projects.from(inner_wp, 0.65, { yPercent: 100, ease: Back.easeOut });

new ScrollMagic.Scene({
    triggerElement: "#work_projects",
    triggerHook: 0.15,
})
    .setTween(work_projects)
    // .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 40
    // })
    .addTo(controller);

//projects
$(".wrapper").each(function () {
    var tl = new TimelineMax();
    var child = $(this).find(".child");
    tl.to(child, 1, { y: -180, ease: Linear.easeNone });

    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
    })
        .setTween(tl)
        // .addIndicators({
        //     colorTrigger: "black",
        //     colorStart: "black",
        //     colorEnd: "black",
        //     indent: 10
        // })
        .addTo(controller);
});

//work projects individual summary
var project_works_summary = new TimelineMax();
project_works_summary.staggerFrom(".projects", 1.25, {
    scale: 0,
    cycle: {
        y: [-50, 50]
    },
    ease: Elastic.easeOut,
    stagger: {
        from: "center",
        amount: 0.25
    }
});

new ScrollMagic.Scene({
    triggerElement: "#work_projects",
    triggerHook: 0.15
})
    // .addIndicators({
    //     colorTrigger: "white",
    //     colorStart: "white",
    //     colorEnd: "white",
    //     indent: 5
    // })
    .setTween(project_works_summary)
    .addTo(controller);