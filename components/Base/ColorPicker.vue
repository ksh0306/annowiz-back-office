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
                        <span class="svg-container" @click="saveColors(false)">
                            <svg-icon icon-class="x-close" />
                        </span>
                    </div>
                    <Compact v-model="colors"
                      :palette="paletteColors"    
                     ></Compact>
                    <div class="buttonWrap">
                        <el-button type="secondary" class="commonButton" @click="saveColors(false)">Cancel</el-button>
                        <el-button type="primary" class="commonButton" @click="saveColors(true)">Save</el-button>
                    </div>
                </div>
                <el-button slot="reference">
                    <span :style="{background : selectedColors.hex}"></span>
                    <span>{{selectedColors.hex}}</span>
                    <span class="svg-container">
                        <svg-icon icon-class="eye-dropper" />
                    </span>
                </el-button>
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
                paletteColors :[ '#CD5C5C','#F97316','#FAAD14','#50C878','#2DD4BF','#3B82F6','#8B5CF6','#EC4899','#D946EF','#DEB887','#84CC16','#0EA5E9'],
                selectedColors:{}, 
            }
        },
        mounted(){
            this.selectedColors = this.colors;
        },
        methods:{
            saveColors(isSave){
               this.visible = false;
               if(isSave) this.selectedColors = this.colors;
               else this.colors = this.selectedColors;
               this.$emit('setColors', this.selectedColors)            
            },

        }
    }
</script>



<style lang="scss" scoped>
.el-button::v-deep{
    width: 180px;
    padding: 0px 20px;
    height: 40px;
    line-height: 40px;
     > span{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        > span{
         //버튼 색상 표시    
          &:nth-child(1){
              width:24px; 
              height:24px; 
              border-radius:4px;
          }
          //버튼 색상 hex표시
          &:nth-child(2){
            margin-right: 20px;
            
          }
          //버튼 내 아이콘 
          .svg-container{
            font-size: 18px;
          }
        }

     }
}
.el-popover > div{
    display:flex; 
    flex-direction:column;
    width: 180px;
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