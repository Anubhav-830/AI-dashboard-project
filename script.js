
const data = {
    labels: ["AI", "Web Dev", "Data Science", "Cyber Security", "Cloud"],
    values: [30, 20, 25, 10, 15]
};

const barCtx = document.getElementById('barChart').getContext('2d');

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: data.labels,
        datasets: [{
            label: 'Project Distribution',
            data: data.values,
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
                '#9966ff'
            ]
        }]
    },
    options: {
        responsive: true
    }
});


const pieCtx = document.getElementById('pieChart').getContext('2d');

new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: data.labels,
        datasets: [{
            data: data.values,
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
                '#9966ff'
            ]
        }]
    },
    options: {
        responsive: true
    }
});