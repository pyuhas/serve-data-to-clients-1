const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = express()
const PORT        = process.env.PORT || 3000
const data = [
  {
    "ID": 1,
    "Cohort Name": "17-01-WD-DP",
    "Cohort Code": "g100",
    "Number of Students": 28
  },
  {
    "ID": 2,
    "Cohort Name": "17-01-DS-GT",
    "Cohort Code": "g105",
    "Number of Students": 24
  },
  {
    "ID": 3,
    "Cohort Name": "17-02-WD-PX",
    "Cohort Code": "g109",
    "Number of Students": 30
  },
  {
    "ID": 4,
    "Cohort Name": "17-03-WD-BD",
    "Cohort Code": "g110",
    "Number of Students": 29
  }
]

function findById(data, id) {
  for (let i = 0; i < data. length; i++) {
    if (data[i].ID == id) {
      return data[i];
    }
  }
    return null;
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))

app.get('/', (req, res) => {
  res.json(data)
})

app.get('/:id', (req, res) => {
  let record = findById(data, req.params.id)
  if (!record){
    res.status(404).json({
      error: {
        message: "No record found!"
      }
    })
  } else {
  res.json({data: record})
  }
});

app.listen(PORT, () => console.log('Example app running'))
