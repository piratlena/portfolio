const progress = () => {

    const percent = document.querySelectorAll('.knowledge__progress-percent'),
          lines = document.querySelectorAll('.knowledge__progress-line span');

    percent.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    })
}

export default progress;