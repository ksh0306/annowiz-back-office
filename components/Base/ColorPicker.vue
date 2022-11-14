<template>
    <div class="color-picker">
        <el-form-item label="색상 선택">
            <el-popover
                placement="bottom"
                trigger="click"
                width="auto"
                v-model="visible"
                content="this is content, this is content, this is content">
                <div style="">
                    <div class="popTitle">
                        <span>Select Color</span>
                        <span class="svg-container" @click="visible = false">
                            <svg-icon icon-class="x-close" />
                        </span>
                    </div>
                    <Compact v-model="colors"
                      :palette="paletteColors"    
                     ></Compact>
                    <div class="buttonWrap">
                        <el-button type="secondary" class="commonButton" @click="visible = false">Cancel</el-button>
                        <el-button type="primary" class="commonButton" @click="visible = false">Save</el-button>
                    </div>
                </div>
                <el-button slot="reference"><span></span>{{colors.hex}}</el-button>
            </el-popover>

        </el-form-item>
    </div>
</template>

<script>
    import { Compact } from "vue-color";

    export default {
        name :"ColorPicker",
        components:{
            Compact,
        },
        data(){
            return{
                visible: false,
                colors:{
                    hex : "#CD5C5C",
                    hex8 : "#CD5C5CFF",
                    rgba : {r:205,g:92,b:92,a:1},
                    hsl:{h:0,s:0.5305164319248827,l:0.5823529411764706,a:1},
                    hsv:{h:0,s:0.551219512195122,v:0.803921568627451,a:1},
                    a:1
                }, 
                paletteColors :[ '#CD5C5C','#F97316','#FAAD14','#50C878','#2DD4BF','#3B82F6','#8B5CF6','#EC4899','#D946EF','#DEB887','#84CC16','#0EA5E9']
            }
        },
        methods:{
            saveColors(event){
               console.log(this.colors, JSON.stringify(this.colors));
                            
            },
            closeColorPalette(){

            }
        }
    }
</script>



<style lang="scss" scoped>
.el-popover > div{
    display:flex; 
    flex-direction:column
}

.popTitle {
    display:flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom:15px; 
    padding-bottom:5px; 
    border-bottom:1px solid #CED8E3;

    .svg-container{
     cursor: pointer;   
    }
}
.buttonWrap{
    display:flex; 
    margin-top:15px;
}

 .vc-compact::v-deep {
    width: 180px;
    box-shadow: unset;
    .vc-compact-colors{
        overflow: inherit;
    }
    .vc-compact-color-item{
        width: 24px ;
        height: 24px ;
        border-radius: 4px;
    }

    .vc-compact-dot {
        width: 24px;
        height: 24px;
        position: unset;
        background: unset;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
}




</style>