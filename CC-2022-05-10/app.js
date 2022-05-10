/* In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */
function well(x){
    let good = 0;
    x.forEach((x) => {if (x == "good"){good++}});
    if (good > 0 && good < 3){
      return 'Publish!';
    } else if (good >= 3){
      return 'I smell a series!';
    } else {
      return 'Fail!';
    }
  }