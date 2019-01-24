function comparisonNum() {

    var first = document.comparation.first.value;
    var second = document.comparation.second.value;

    if (first > second) {
        document.comparation.result.value = "Prvi broj je veci.";
    } else if (first < second) {
        document.comparation.result.value = "Prvi broj je manji.";
    } else {
        document.comparation.result.value = "Brojevi su isti.";
    }

}



