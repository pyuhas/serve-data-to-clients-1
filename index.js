const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = express()
const PORT        = process.env.PORT || 3000
const data = [
  {
    "id": 1,
    "cohortName": "17-01-WD-DP",
    "cohortCode": "g100",
    "numberOfStudents": 28
  },
  {
    "id": 2,
    "cohortName": "17-01-DS-GT",
    "cohortCode": "g105",
    "numberOfStudents": 24
  },
  {
    "id": 3,
    "cohortName": "17-02-WD-PX",
    "cohortCode": "g109",
    "numberOfStudents": 30
  },
  {
    "id": 4,
    "cohortName": "17-03-WD-BD",
    "cohortCode": "g110",
    "numberOfStudents": 29
  }
]

function findById(data, id) {
  for (let i = 0; i < data. length; i++) {
    if (data[i].ID == id) {
      return data[i]
    }
  }
    return null
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true}))

app.get('/', (req, res) => {
  res.json({data: data})
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
})

app.listen(PORT, () => console.log('Example app running'))
