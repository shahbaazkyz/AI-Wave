
install.packages("twitteR")
library(twitteR)
library(rtweet)

path_loc <- "D:/Hackaton BuildAI"
setwd(path_loc)

setup_twitter_oauth(consumer_key    = "sg25nAZ1rz6rtkbolE55gVrJV", 
                    consumer_secret  = "9dUPpx0jrBk0m5E0HdfoTXGT3Osvg78bgPCsjxvA35EU7dh0rZ", 
                    access_token     = "1059876218298908672-gwdXspkLvqdfV2YI4Sd27gpcyp63OJ",
                    access_secret    = "4T26Bu31e25lL1qZ047vD0yRSiNVDa7JX3jnerkLwYcjP")


tweet_list <- searchTwitter("anxiety", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_anxiety.csv")

tweet_list <- searchTwitter("anxious", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_anxious.csv")

tweet_list <- searchTwitter("bullying", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_bullying.csv")

tweet_list <- searchTwitter("burnout", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_burnout.csv")


tweet_list <- searchTwitter("depression", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_depression.csv")

tweet_list <- searchTwitter("dropout", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_dropout.csv")

tweet_list <- searchTwitter("homework", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_homework.csv")

tweet_list <- searchTwitter("school, anxious", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_school_anxious.csv")

tweet_list <- searchTwitter("stress", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_stress.csv")


tweet_list <- searchTwitter("stressed", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_stressed.csv")


tweet_list <- searchTwitter("study, anxious", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_study_anxious.csv")


tweet_list <- searchTwitter("test, anxiety", lang= "en", n = 10000)  
head(tweet_list)
tweet_df <- twListToDF(tweet_list)
tweets_txt = subset(tweet_df, select = c(text))
head(tweets_txt)

write_as_csv(tweets_txt, "tweets_test_anxiety.csv")





