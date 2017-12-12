import json
import nltk
import re
#import emoji
from nltk.sentiment.vader import SentimentIntensityAnalyzer
posi=0
nega=0
neut=0
with open('Alice_through_the_looking_glass.json',encoding='utf-8',errors='ignore') as json_file:  
     data = json.load(json_file)
     sid = SentimentIntensityAnalyzer()
     comment1=list()
     for r in data:
        comment=r['commentText']
        comment1.append(r['commentText'])
     for i in range(len(comment1)):
        words = comment1[i].split()
        comment1[i]=""
        for word in words:
           comment1[i] = comment1[i] + (word.strip('.@,-()?!#\\:\'"')) + " "
     #Removing emoji data
     emoji_pattern = re.compile("["
                                u"\U0001F600-\U0001F64F"  # emoticons
                                u"\U0001F914"
                                u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                                u"\U0001F680-\U0001F6FF"  # transport & map symbols
                                u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                                "]+", flags=re.UNICODE)
     for i in range(len(comment1)):
        comment1 [i] = emoji_pattern.sub(r'', comment1[i])
     for p in range(len(comment1)):
      try:
        ss = sid.polarity_scores(comment1[p])
        jsonData = json.dumps(ss)
        print (comment1[p])
        compound1=ss["compound"]
        positive=ss["pos"]
        neutral=ss["neu"]
        negative=ss["neg"]
        if (compound1==0):
           print('compound is 0 \n')
           result='neutral: compound is 0'
           neut=neut+1
        elif (negative>=positive):
           print('negative\n')
           result='negative'
           nega=nega+1
        else:  
           print('positive\n')
           result='positive'
           posi=posi+1
        with open('Alice_through_the_looking_glass result.json', 'a') as f:
           json.dump(comment1[p],f)
           f.write('\n')
           json.dump(jsonData, f)
           f.write('\n')
           json.dump(result,f)
           f.write('\n\n')
           result=''
      except(UnicodeEncodeError):
           pass
total=posi+nega+neut           
with open('Alice_through_the_looking_glass result.json', 'a') as g:
   g.write('\n Positive--->')
   json.dump(posi,g)
   g.write('\n')
   g.write('\n Negative--->')
   json.dump(nega,g)
   g.write('\n')
   g.write('\n Neutral--->')
   json.dump(neut,g)
   g.write('\n')
   g.write('\n Total--->')
   json.dump(total,g)
print('Total positive--', posi)
print('Total negative--', nega)
print('Total neutral--', neut)
print('Total comments--',total)




#--------------------------------------        
