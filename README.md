# BUILDWITHAI HACK 2021

## TEAM
AI Wave

## CHALLENGE
Digital Education

### Project Structure
-	IBM API:
NLU_api.ipynb: Contains the NLU implementation for data labelling
ToneAnalyzer_api.ipynb: Contains the ToneAnalyzer implementation for data labelling
-	Machine Learning Algorithms
profile_recommender.ipynb: Contains the recomendation system algoritm that matchs students with psycologists
SentimentAnalysis-XGBoost.ipynb : Contains the python notebook for the training of the sentiment analysis algorithm
ToneAnalyzer-XGBoost.ipynb: Contains the algorithm fo	for the emotion classification (5 classes)
TopicModeling_LDA-train.ipynb: Contains the algorithm      for the topic modeling (LDA Latent ) 


###	Pipeline
Pipeline.iypnb: Contains the python script for the integration of all the algorithms
-	Scrapping
Contains the code for the scrapping algorithms
-	Text Preprocessing
Contains the python script for the text processing stage
-	Web app Solution
Contains the web app solution
-	Virtual Assitant
Contains the json for the virtual assitant implementation


## MEMBERS
- Carmen Monroy Malca
- Ana Roncal Alva
- Virginia Monroy Malca
- Gina Acosta Gutiérrez
- Kevin Gave Cardenas
- Jhonatan Camasca Huaman
- Neisser Alonzo Ale
- Shahbaz Khan

##	MACHINE LEARNING
###	SENTIMENT CLASSIFICATION

#### Prerequisites
Create a IBM Cloud Account
Create an IBM resource called Natural Language Understanding-lite

#### Data Labelling
The database use for Sentiment Classification of was collected from Twitter and Reddit  and labeled employing the IBM Natural Language Understanding service (NLU). By using the API of this resource we were able to obtain the polarity (positive or negative), as well as the score or probability on how positive or negative a text is.


#### Training
Afterwards, the text preprocessed from reddit and twitter is grouped. We build a classifier with XGBOOST algorithm for the sentiment classification. Moreover, a feature extraction technique (TF-IDF) Term Frequency-Inverse Document Frecuency was applied. We use more than 45000 texts in the training step
■	Algorithm Configuration


#### Deployment
We upload the XGBoost- TF-IDF model (pickle format) into a IBM Cloud bucket in order to be consumed by the Virtual Assistant for sentiment classification in real time

### EMOTION CLASSIFICATION

#### Prerequisites
- Create a IBM Cloud Account
- Create an IBM resource called Tone Analyzer-lite

#### Data Labeling
The database use for Emotion Classification of was collected from Twitter and Reddit  and labeled employing the IBM Tone Analyzer. By using the API of this resource we were able to obtain the 7 types of emotions (angry, joy, worry, sad, ...), as well as the score or probability on the emotions in the texts

#### Training
Afterwards, the text preprocessed from reddit and twitter is grouped. We build a classifier with XGBOOST algorithm for the emotion classification. Moreover, a feature extraction technique (TF-IDF) Term Frequency-Inverse Document Frecuency was applied. 

#### Deployment
We upload the XGBoost- TF-IDF model (pickle format) into a IBM Cloud bucket in order to be consumed by the Virtual Assistant for sentiment classification in real time

Se seleccionaron los tweets y comentarios con el score más alto en el caso de los positivos y el más bajo para los negativos. A partir de estos se aplicó el IBM Tone Analyzer, el cual categoriza el texto en 5 posibles categorías: felicidad, miedo, tristeza, enfado, seguro y analítico; y le asigna un score o probabilidad de que el texto contenga características de estas categorías. 

### TOPIC MODELING

#### Prerequisites
- Pandas
- Numpy
- Spacy
- Gensim

#### Introduction
The topic model used for the presented task is called Latent Dirichlet Allocation (LDA). It was trained with the data collected from Twitter and Reddit. Currently it is able to multi-classify seven topics: "Home Conflicts / Bullying", "Depression / Anxiety", "Bullying", "Mental Health / Anxiety", "Depression / Bullying", "Sadness / Depression / Anxiety" and "College anxiety/ Dropout". 

Despite using social media data as an input the main goal was to develop a model that can identify the different topics associated with mental health. So, it can help to appropriately classify the day to day student’s information that is gathered through the virtual assistant. 


#### Training
To train the model the following configurations are needed: Firstly install the packages listed in the prerequisite section and then download the Spacy’s model “en_core_web_md”.


### RECOMMENDATION SYSTEM

#### Prerequisites
- Numpy
- Pandas
- Scipy
- Sklearn
- Pickle
- 
#### Introduction
We developed a Keywords Based Recommender System algorithm using textual information collected from hobbies, interests and tastes students (like a favorite music, movie, sport, book and other) to try matching with other similar profiles. 

#### Training
We train an algorithm that compares each profile student with a database of hundreds or thousands of them in order to find the most similar. To do this, first, we transform the textual data into numeric data using a Countvectorizer technique for each row. Then, with this trained algorithm, we can calculate the distances between input vector with all vectors in the full dataset. For this case, we use Cosine Similarities to get the most near vectors.  Finally, with this process, the algorithm can output a recommender list of those profiles that best fit the input profile according to hobbies, interests and tastes.

## VIRTUAL ASSISTANT
The virtual assistant works as a diary and a companion, since it monitors the mental health of the student and generates proactive interaction with the student through messages that are sent when the assistant encounters an alert (decrease in the student's mental health).

The virtual assistant has 3 main objectives, which are:

- Interact with the user, in this case the students, in order to obtain information on how they feel, if they have a problem, etc. and in this way they can ask for help with a specialist, if required, to support you. 
- It allows specialists, teachers or psychologists, to be aware of the emotional state of their students, since in all interactions between the assistant and the students, the information is stored and analyzed, so that the specialists can make proactive decisions . 
- The assistant is trained in a natural way, so that when he interacts with the students, he can have a conversation pretending to be a person and generating trust.	

So, with the information compiled, we can generate dashboards with our sentiment classification, emotion classification and topic modeling trained algorithms, thus managing to understand in simple terms how the person felt those days and about what issues they felt like this.

With respect to the technology, our assistant was developed with the IBM Waston Assistant service, which can be found within the IBM Cloud catalog. The development of this virtual assistant was done through the interface provided by WA and the development output is a json file students_information_emotional.json

The principal journey of questions and answers of our virtual assistant is like follow:

https://www.figma.com/file/f24RIlLjTBBvWx5LLmpBkp/MOODY?node-id=0%3A1

