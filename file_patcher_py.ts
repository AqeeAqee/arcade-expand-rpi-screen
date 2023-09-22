// following are a python file, which can do the patch auto.
// change file path in codes to yours first !!!

/* 

sub_config25= bytes.fromhex('25000000')
sub_config26= bytes.fromhex('000026000000')
sub_screen= bytes.fromhex('A0207821')
locations_config=[]
with open('C:\\Users\\aqee\\Downloads\\test.elf', "rb") as f:
    b=f.read()
    print("file opened with %d bytes"%len(b))

    #looking for screen creation
    count= b.count(sub_screen)
    if(count==0):
        print("screen creation not find!!!")
        exit()
    elif(count>1):
        print("multi screen creation find!!!")
        exit()
    loc_screen= b.find(sub_screen)
    print("screen: 0x%x"%loc_screen)

    #looking for config
    p=0
    while 1:
        p = b.find(sub_config26, p+2)
        if(p<0): break
        r= b.find(sub_config25, p-6, p)
        # print("0x%x, 0x%x"%(l, r))
        if(r==p-6):
            locations_config.append(p)
        # print("config: 0x%x"%p)

    if(len(locations_config)==0):
        print("config not find!!!")
        exit()
    elif(len(locations_config)>1):
        print("multi config find!!!")
        for l in locations_config:
            print("\t0x%x"%l)
        exit()
    loc_config= locations_config[0] -6
    print("config: 0x%x"%loc_config)


    with open(f.name.replace(".elf", "_%dx%d.elf")%(b[loc_config+4],b[loc_config+4+8]), "wb") as f2:
        f2.write(b)
        f2.seek(loc_screen)
        f2.write(b[loc_config+4:loc_config+4+1])
        f2.seek(loc_screen+2)
        f2.write(b[loc_config+4+8:loc_config+4+8+1])
        print("Patch success !")

*/